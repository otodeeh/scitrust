import { GetDistributorDashboard, LoadAccountByToken } from "domain/usecases";
import {
  ok,
  serverError
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse
} from "presentation/protocols";

export class GetDistributorDashboardController implements Controller {
  constructor(
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly getDistributorDashboard: GetDistributorDashboard,
  ) { }
  async handle(httpRequest: HttpRequest<GetDistributorDashboard.Params, any, any>): Promise<HttpResponse> {
    try {
      let distributorId = 0
      const xAccessToken = httpRequest.headers["x-access-token"]
      const account = await this.loadAccountByToken.load({ token: xAccessToken, roles: ['system-role-admin'] });

      if (account.role.split("_")[0] === "distributor") {
        distributorId = account.distributorId
      }

      const { equipmentEndDate, equipmentLimit = 10, equipmentStartDate } = httpRequest.body.equipmentParams;
      const { partEndDate, partLimit = 10, partStartDate } = httpRequest.body.partParams;
      const technicalSupports = await this.getDistributorDashboard.getDashboard({ distributorId, equipmentParams: { equipmentEndDate, equipmentLimit, equipmentStartDate }, partParams: { partEndDate, partLimit, partStartDate } });

      return ok(technicalSupports);
    } catch (error) {
      return serverError(error);
    }
  }
}
