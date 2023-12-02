import { LoadAccountByToken, UpdateAccountLanguageById } from "domain/usecases";
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

export class UpdateAccountLanguageByIdController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly updateAccountLanguageById: UpdateAccountLanguageById,
  ) { }
  async handle(httpRequest: HttpRequest<UpdateAccountLanguageById.Params, any, any>): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      if (!id) {
        return badRequest(new MissingParamError('id'));
      }

      const xAccessToken = httpRequest.headers["x-access-token"]
      const account = await this.loadAccountByToken.load({ token: xAccessToken });

      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error);
      }

      const { language } = httpRequest.body

      const data: UpdateAccountLanguageById.Params = {
        id: Number(httpRequest.params.id),
        language,
      }
      const authenticationModel = await this.updateAccountLanguageById.updateLanguageById(data);
      if (!authenticationModel) {
        return unauthorized();
      }

      return ok(authenticationModel);
    } catch (error) {
      return serverError(error);
    }
  }
}
