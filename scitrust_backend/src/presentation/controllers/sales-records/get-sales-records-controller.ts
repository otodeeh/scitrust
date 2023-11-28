import { GetSalesRecords } from "domain/usecases";
import {
  ok,
  serverError
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse
} from "presentation/protocols";

export class GetSalesRecordsController implements Controller {
  constructor(
    private readonly getSalesRecords: GetSalesRecords,
  ) { }
  async handle(httpRequest: HttpRequest<GetSalesRecords.Params, any, any>): Promise<HttpResponse> {
    try {
      const { distributorId = 0, limit = 10, offset = 0, term = '' } = httpRequest.query;
      const salesRecords = await this.getSalesRecords.get({ distributorId: Number(distributorId), limit: Number(limit), offset: Number(offset), term });

      return ok(salesRecords);
    } catch (error) {
      return serverError(error);
    }
  }
}
