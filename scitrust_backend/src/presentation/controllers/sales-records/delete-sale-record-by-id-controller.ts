import { DeleteSaleRecordById } from "domain/usecases";
import {
  badRequest,
  ok,
  serverError,
  unauthorized,
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
} from "presentation/protocols";

export class DeleteSaleRecordByIdController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly deleteSaleRecordById: DeleteSaleRecordById,
  ) { }
  async handle(httpRequest: HttpRequest<DeleteSaleRecordById.Params, any, any>): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      const error = this.validation.validate(httpRequest.params)
      if (error) {
        return badRequest(error);
      }

      const saleRecordId = await this.deleteSaleRecordById.delete({ id: Number(id) });
      if (!saleRecordId) {
        return unauthorized();
      }

      return ok({});
    } catch (error) {
      return serverError(error);
    }
  }
}
