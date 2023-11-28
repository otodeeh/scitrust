import { GetCountries } from "domain/usecases";
import {
  ok,
  serverError
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse
} from "presentation/protocols";

export class GetCountriesController implements Controller {
  constructor(
    private readonly getCountries: GetCountries,
  ) { }
  async handle(httpRequest: HttpRequest<GetCountries.Params, any, any>): Promise<HttpResponse> {
    try {
      const { limit = 10, offset = 0, term = '' } = httpRequest.query;
      const countries = await this.getCountries.get({ limit: Number(limit), offset: Number(offset), term });

      return ok(countries);
    } catch (error) {
      return serverError(error);
    }
  }
}
