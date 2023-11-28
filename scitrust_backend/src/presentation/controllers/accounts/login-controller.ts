import { Authentication } from "domain/usecases";
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

export class LoginController implements Controller {
  constructor(
    private readonly authentication: Authentication,
    private readonly validation: Validation
  ) {}

  async handle(httpRequest: HttpRequest<Authentication.Params, any, any>): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body);
      if (error) {
        return badRequest(error);
      }

      const authenticationModel = await this.authentication.auth(httpRequest.body);
      if (!authenticationModel) {
        return unauthorized();
      }

      return ok(authenticationModel);
    } catch (error) {
      return serverError(error);
    }
  }
}
