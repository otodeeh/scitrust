import { GetDefects } from "domain/usecases";
import {
  ok,
  serverError
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse
} from "presentation/protocols";

export class GetDefectsController implements Controller {
  constructor(
    private readonly getDefects: GetDefects,
  ) { }
  async handle(httpRequest: HttpRequest<GetDefects.Params, any, any>): Promise<HttpResponse> {
    try {
      const { limit = 10, offset = 0, term = '' } = httpRequest.query;
      const defects = await this.getDefects.get({ limit: Number(limit), offset: Number(offset), term });

      return ok(defects);
    } catch (error) {
      return serverError(error);
    }
  }
}
