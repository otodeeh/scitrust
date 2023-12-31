import { LoadAccountByToken } from "domain/usecases";
import {
  badRequest,
  ok,
  serverError,
  unauthorized
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
} from "presentation/protocols";
import { AddComment } from "src/domain/usecases/periodicals/add-comment";

export class AddCommentController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly addComment: AddComment,
  ) { }
  async handle(httpRequest: HttpRequest<Omit<AddComment.Params, "userId" | "periodicalId">, Pick<AddComment.Params, "periodicalId">, any>): Promise<HttpResponse> {
    try {
      const { text } = httpRequest.body;
      const { periodicalId } = httpRequest.params;

      const error = this.validation.validate({ text, periodicalId: Number(periodicalId) });
      if (error) {
        return badRequest(error);
      }

      const xAccessToken = httpRequest.headers["x-access-token"]
      const user = await this.loadAccountByToken.load({ token: xAccessToken });

      if (!user) {
        return unauthorized();
      }

      const technicalSupports = await this.addComment.addComment({ userId: user.id, text, periodicalId: Number(periodicalId) });

      return ok(technicalSupports);
    } catch (error) {
      return serverError(error);
    }
  }
}
