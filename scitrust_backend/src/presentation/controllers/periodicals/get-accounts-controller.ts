import { GetPeriodical } from "domain/usecases";
import {
  ok,
  serverError
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse
} from "presentation/protocols";

export class GetPeriodicalsController implements Controller {
  constructor(
    private readonly getPeriodicals: GetPeriodical,
  ) { }
  async handle(httpRequest: HttpRequest<GetPeriodical.Params, any, any>): Promise<HttpResponse> {
    try {
      const { limit = 10, offset = 0, term = '' } = httpRequest.query;
      const periodicals = await this.getPeriodicals.get({ limit: Number(limit), offset: Number(offset), term });

      return ok(periodicals);
    } catch (error) {
      return serverError(error);
    }
  }
}
