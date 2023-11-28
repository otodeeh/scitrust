import { AddSaleRecord, LoadAccountByToken, ValidateSoldEquipmentsByIds } from "domain/usecases";
import { InvalidUniqueField } from "presentation/errors";
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

export class AddSaleRecordController implements Controller {
  constructor(
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly validation: Validation,
    private readonly validateSoldEquipmentsByIds: ValidateSoldEquipmentsByIds,
    private readonly addSaleRecord: AddSaleRecord,
  ) { }
  async handle(httpRequest: HttpRequest<AddSaleRecord.Params, any, any>): Promise<HttpResponse> {
    try {
      let distributorId = 0
      const xAccessToken = httpRequest.headers["x-access-token"]
      const account = await this.loadAccountByToken.load({ token: xAccessToken, roles: ['system-role-admin'] });

      distributorId = account.distributorId

      const { client, equipments, distributorOrder = '', files, observation = '', saleDate } = httpRequest.body
      const error = this.validation.validate({
        ...httpRequest.params,
        saleDate: saleDate,
        ...client,
      })

      if (error) {
        return badRequest(error);
      }

      const validatedEquipments = await this.validateSoldEquipmentsByIds.validate(equipments.map((equipment) => ({ id: equipment.id })));
      if (validatedEquipments.length > 0) {
        return badRequest(new InvalidUniqueField('equipment id'));
      }

      const data: AddSaleRecord.Params = {
        client: client,
        equipments: equipments,
        distributorId: distributorId,
        distributorOrder: distributorOrder,
        files: files,
        observation: observation,
        saleDate: saleDate,
      }

      const saleRecordId = await this.addSaleRecord.add(data);
      if (!saleRecordId) {
        return unauthorized();
      }

      return ok(saleRecordId);
    } catch (error) {
      return serverError(error);
    }
  }
}
