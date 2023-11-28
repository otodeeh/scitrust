import { GetEquipments, LoadAccountByToken } from "domain/usecases";
import {
  ok,
  parseBoolean,
  serverError
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse
} from "presentation/protocols";

export class GetEquipmentsController implements Controller {
  constructor(
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly getEquipments: GetEquipments,
  ) { }
  async handle(httpRequest: HttpRequest<GetEquipments.Params, any, any>): Promise<HttpResponse> {
    try {
      let distributorId = 0
      const xAccessToken = httpRequest.headers["x-access-token"]
      const account = await this.loadAccountByToken.load({ token: xAccessToken, roles: ['system-role-admin'] });

      if (account.role.split("_")[0] === "distributor") {
        distributorId = account.distributorId
      }

      const { limit = 10, offset = 0, term = '', sold = false, clientId } = httpRequest.query;
      const equipments = await this.getEquipments.get({ clientId, distributorId, limit: Number(limit), offset: Number(offset), term, sold: parseBoolean(sold) });

      return ok(equipments);
    } catch (error) {
      return serverError(error);
    }
  }
}
