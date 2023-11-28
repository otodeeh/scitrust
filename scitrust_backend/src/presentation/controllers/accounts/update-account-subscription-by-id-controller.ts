import { LoadAccountByToken, UpdateAccountSubscriptionById } from "domain/usecases";
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

export class UpdateAccountSubscriptionByIdController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly updateAccountSubscriptionById: UpdateAccountSubscriptionById,
  ) { }
  async handle(httpRequest: HttpRequest<UpdateAccountSubscriptionById.Params, any, any>): Promise<HttpResponse> {
    try {
      const xAccessToken = httpRequest.headers["x-access-token"]
      const account = await this.loadAccountByToken.load({ token: xAccessToken, roles: ['system-role-admin'] });

      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error);
      }

      const { subscription } = httpRequest.body

      const data: UpdateAccountSubscriptionById.Params = {
        accountId: account.id,
        subscription: JSON.stringify(subscription),
      }
      const authenticationModel = await this.updateAccountSubscriptionById.updateSubscriptionById(data);

      if (!authenticationModel) {
        return unauthorized();
      }

      return ok(authenticationModel);
    } catch (error) {
      return serverError(error);
    }
  }
}
