import { AddComment, LoadAccountByToken } from "domain/usecases";
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

export class AddCommentController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly addComment: AddComment,
  ) { }
  async handle(httpRequest: HttpRequest<Omit<AddComment.Params, "accountId" | "technicalSupportId">, Pick<AddComment.Params, "technicalSupportId">, any>): Promise<HttpResponse> {
    try {
      const { files = [], comment, financialNotify = false } = httpRequest.body;
      const { technicalSupportId } = httpRequest.params;

      const error = this.validation.validate({ comment, technicalSupportId: Number(technicalSupportId) });
      if (error) {
        return badRequest(error);
      }

      const xAccessToken = httpRequest.headers["x-access-token"]
      const account = await this.loadAccountByToken.load({ token: xAccessToken, roles: ['system-role-admin'] });

      const technicalSupports = await this.addComment.addComment({ accountId: account.id, comment, files, financialNotify, technicalSupportId: Number(technicalSupportId) });

      return ok(technicalSupports);
    } catch (error) {
      return serverError(error);
    }
  }
}
