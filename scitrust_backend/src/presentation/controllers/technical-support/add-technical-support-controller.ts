import { AddTechnicalSupport, LoadAccountByToken, ValidateSoldEquipmentsByIds } from "domain/usecases";
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

export class AddTechnicalSupportController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly validateSoldEquipmentsByIds: ValidateSoldEquipmentsByIds,
    private readonly addTechnicalSupport: AddTechnicalSupport,
  ) { }
  async handle(httpRequest: HttpRequest<AddTechnicalSupport.Params, any, any>): Promise<HttpResponse> {
    try {
      const error = httpRequest.body.technicalSupports.map((technicalSupport) => {
        return this.validation.validate({
          ...httpRequest.body.client,
          clientReport: technicalSupport.clientReport,
          defectId: technicalSupport.defectId,
          equipmentId: technicalSupport.equipmentId,
          servicePerformed: technicalSupport.servicePerformed,
          contact: technicalSupport.technician.contact,
          email: technicalSupport.technician.email,
          phone: technicalSupport.technician.phone
        })
      });

      if (error.some(error => error)) {
        return badRequest(error.filter(error => error)[0]);
      }

      const xAccessToken = httpRequest.headers["x-access-token"]
      const account = await this.loadAccountByToken.load({ token: xAccessToken, roles: ['system-role-admin'] });

      const equipments = await this.validateSoldEquipmentsByIds.validate(httpRequest.body.technicalSupports.map((technicalSupport) => ({ id: technicalSupport.equipmentId })));
      if (equipments.length = 0) {
        return badRequest(new Error('invalid equipment id'));
      }

      const technicalSupports = await this.addTechnicalSupport.add({ ...httpRequest.body, accountId: account.id });
      if (!technicalSupports?.length) {
        return unauthorized();
      }

      return ok(technicalSupports);
    } catch (error) {
      return serverError(error);
    }
  }
}
