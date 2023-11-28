import { LoadAccountByToken, UpdateAccountById } from "domain/usecases";
import {
  badRequest,
  ok,
  serverError,
  unauthorized,
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
} from "presentation/protocols";
import { MissingParamError } from "src/presentation/errors";

export class UpdateAccountByIdController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly updateAccountById: UpdateAccountById,
  ) { }
  async handle(httpRequest: HttpRequest<UpdateAccountById.Params, any, any>): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      if (!id) {
        return badRequest(new MissingParamError('id'));
      }

      const xAccessToken = httpRequest.headers["x-access-token"]
      const account = await this.loadAccountByToken.load({ token: xAccessToken, roles: ['system-role-admin'] });

      if (account?.role.split("_")[0] !== "digital" && (!account || account.id !== Number(id))) {
        return unauthorized();
      }

      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error);
      }

      const { contact, deletedAt = null, email, language, phone, role = null, token = null } = httpRequest.body

      const data: UpdateAccountById.Params = {
        id: Number(httpRequest.params.id),
        contact,
        email,
        language,
        phone,
        token
      }

      if (deletedAt) {
        data.deletedAt = new Date(deletedAt)
      }

      if (role) {
        data.role = role
      }

      const authenticationModel = await this.updateAccountById.updateById(data);
      if (!authenticationModel) {
        return unauthorized();
      }

      return ok(authenticationModel);
    } catch (error) {
      return serverError(error);
    }
  }
}
