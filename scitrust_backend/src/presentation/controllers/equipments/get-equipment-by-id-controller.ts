import { GetEquipmentById } from "domain/usecases";
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

export class GetEquipmentByIdController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly getEquipmentById: GetEquipmentById,
  ) { }
  async handle(httpRequest: HttpRequest<GetEquipmentById.Params, any, any>): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      const error = this.validation.validate(httpRequest.params)
      if (error) {
        return badRequest(error);
      }

      const saleRecord = await this.getEquipmentById.getById({ id: Number(id) });
      if (!saleRecord) {
        return badRequest(new DataNotFoundError(id));
      }

      return ok(saleRecord);
    } catch (error) {
      return serverError(error);
    }
  }
}
