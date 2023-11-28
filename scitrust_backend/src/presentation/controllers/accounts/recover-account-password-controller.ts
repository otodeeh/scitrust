import { Authentication, RecoverAccountPassword } from "domain/usecases";
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

export class RecoverAccountPasswordController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly recoverAccountPassword: RecoverAccountPassword,
    private readonly authentication: Authentication
  ) { }
  async handle(httpRequest: HttpRequest<RecoverAccountPassword.Params, any, any>): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body);
      if (error) {
        return badRequest(error);
      }

      const account = await this.recoverAccountPassword.recover(httpRequest.body);
      if (!account) {
        return unauthorized();
      }

      const { password }: RecoverAccountPassword.Params = httpRequest.body;
      const authenticationModel = await this.authentication.auth({
        email: account.email,
        password,
      });
      
      return ok(authenticationModel);
    } catch (error) {
      return serverError(error);
    }
  }
}
