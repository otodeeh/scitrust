import { CleanSoldEquipmentsBySaleRecordId, DeleteFilesBySaleRecordId, UpdateSaleRecordById, ValidateSoldEquipmentsByIds } from "domain/usecases";
import { InvalidUniqueField, MissingParamError } from "presentation/errors";
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

export class UpdateSaleRecordByIdController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly cleanSoldEquipmentsBySaleRecordId: CleanSoldEquipmentsBySaleRecordId,
    private readonly deleteFilesBySaleRecordId: DeleteFilesBySaleRecordId,
    private readonly validateSoldEquipmentsByIds: ValidateSoldEquipmentsByIds,
    private readonly updateSaleRecordById: UpdateSaleRecordById,
  ) { }
  async handle(httpRequest: HttpRequest<UpdateSaleRecordById.Params, any, any>): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      if (!id) {
        return badRequest(new MissingParamError('id')) ;
      }

      const error = this.validation.validate({
        ...httpRequest.body.client,
      })

      if (error) {
        return badRequest(error);
      }

      await this.cleanSoldEquipmentsBySaleRecordId.clean({ saleRecordId: Number(httpRequest.params.id) });
      await this.deleteFilesBySaleRecordId.delete({ saleRecordId: Number(httpRequest.params.id) });

      const equipments = await this.validateSoldEquipmentsByIds.validate(httpRequest.body.equipments.map((equipment) => ({ id: equipment.id })));
      if (equipments.length > 0) {
        return badRequest(new InvalidUniqueField('equipment id'));
      }

      const data: UpdateSaleRecordById.Params = {
        id: Number(httpRequest.params.id),
        client: httpRequest.body.client,
        equipments: httpRequest.body.equipments,
        distributorOrder: httpRequest.body.distributorOrder || '',
        files: httpRequest.body.files,
        observation: httpRequest.body.observation || '',
      }

      const saleRecordId = await this.updateSaleRecordById.update(data);
      if (!saleRecordId) {
        return unauthorized();
      }

      return ok(saleRecordId);
    } catch (error) {
      return serverError(error);
    }
  }
}
