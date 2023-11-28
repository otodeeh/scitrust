import { GetTechnicalSupportList, LoadAccountByToken } from "domain/usecases";
import {
  ok,
  serverError
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse
} from "presentation/protocols";

export class GetTechnicalSupportListController implements Controller {
  constructor(
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly getTechnicalSupportList: GetTechnicalSupportList,
  ) { }
  async handle(httpRequest: HttpRequest<GetTechnicalSupportList.Params, any, any>): Promise<HttpResponse> {
    try {
      let distributorId = 0
      const xAccessToken = httpRequest.headers["x-access-token"]
      const account = await this.loadAccountByToken.load({ token: xAccessToken, roles: ['system-role-admin'] });

      if (account.role.split("_")[0] === "distributor") {
        distributorId = account.distributorId
      }

      const { limit = 10, offset = 0, term = '', status = '' } = httpRequest.query;
      const technicalSupports = await this.getTechnicalSupportList.getList({ distributorId, limit: Number(limit), offset: Number(offset), term, status });

      return ok(technicalSupports);
    } catch (error) {
      return serverError(error);
    }
  }
}
