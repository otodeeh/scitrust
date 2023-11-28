import { GetTechnicalSupportById } from "domain/usecases";
import { DataNotFoundError } from "presentation/errors";
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

export class GetTechnicalSupportByIdController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly getTechnicalSupportById: GetTechnicalSupportById,
  ) { }
  async handle(httpRequest: HttpRequest<GetTechnicalSupportById.Params, any, any>): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      const error = this.validation.validate(httpRequest.params)
      if (error) {
        return badRequest(error);
      }

      const saleRecord = await this.getTechnicalSupportById.getById({ id: Number(id) });
      if (!saleRecord) {
        return badRequest(new DataNotFoundError(id));
      }

      return ok(saleRecord);
    } catch (error) {
      return serverError(error);
    }
  }
}
