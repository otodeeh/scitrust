import { GetClients, LoadAccountByToken } from "domain/usecases";
import {
  ok,
  serverError
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse
} from "presentation/protocols";

export class GetClientsController implements Controller {
  constructor(
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly getClients: GetClients,
  ) { }
  async handle(httpRequest: HttpRequest<GetClients.Params, any, any>): Promise<HttpResponse> {
    try {
      let distributorId = 0
      const xAccessToken = httpRequest.headers["x-access-token"]
      const account = await this.loadAccountByToken.load({ token: xAccessToken, roles: ['system-role-admin'] });

      if (account.role.split("_")[0] === "distributor") {
        distributorId = account.distributorId
      }

      const { limit = 10, offset = 0, term = '' } = httpRequest.query;
      const clients = await this.getClients.get({ distributorId, limit: Number(limit), offset: Number(offset), term });

      return ok(clients);
    } catch (error) {
      return serverError(error);
    }
  }
}
