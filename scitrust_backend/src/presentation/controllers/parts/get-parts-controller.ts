import { GetParts } from "domain/usecases";
import {
  ok,
  serverError
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse
} from "presentation/protocols";

export class GetPartsController implements Controller {
  constructor(
    private readonly getParts: GetParts,
  ) { }
  async handle(httpRequest: HttpRequest<GetParts.Params, any, any>): Promise<HttpResponse> {
    try {
      const { limit = 10, offset = 0, term = '' } = httpRequest.query;
      const parts = await this.getParts.get({ limit: Number(limit), offset: Number(offset), term });

      return ok(parts);
    } catch (error) {
      return serverError(error);
    }
  }
}
