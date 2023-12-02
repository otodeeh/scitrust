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
import { AddRating } from "src/domain/usecases/periodicals/add-rating";

export class AddRatingController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly addRating: AddRating,
  ) { }
  async handle(httpRequest: HttpRequest<Omit<AddRating.Params, "userId" | "periodicalId">, Pick<AddRating.Params, "periodicalId">, any>): Promise<HttpResponse> {
    try {
      const { value } = httpRequest.body;
      const { periodicalId } = httpRequest.params;

      const error = this.validation.validate({ value, periodicalId: Number(periodicalId) });
      if (error) {
        return badRequest(error);
      }

      const xAccessToken = httpRequest.headers["x-access-token"]
      const user = await this.loadAccountByToken.load({ token: xAccessToken });

      if (!user) {
        return unauthorized();
      }

      const technicalSupports = await this.addRating.addRating({ userId: user.id, value, periodicalId: Number(periodicalId) });

      return ok(technicalSupports);
    } catch (error) {
      return serverError(error);
    }
  }
}
