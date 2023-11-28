import { SendMailRecoverAccountPassword } from "domain/usecases";
import {
  badRequest,
  ok,
  serverError
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
} from "presentation/protocols";

export class SendMailRecoverAccountPasswordController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly sendMailRecoverAccountPassword: SendMailRecoverAccountPassword
  ) { }
  async handle(httpRequest: HttpRequest<SendMailRecoverAccountPassword.Params, any, any>): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body);
      if (error) {
        return badRequest(error);
      }

      await this.sendMailRecoverAccountPassword.send({
        email: httpRequest.body.email
      })

      return ok({});
    } catch (error) {
      return serverError(error);
    }
  }
}
