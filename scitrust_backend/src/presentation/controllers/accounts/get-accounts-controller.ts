import { GetAccounts } from "domain/usecases";
import {
  ok,
  serverError
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse
} from "presentation/protocols";

export class GetAccountsController implements Controller {
  constructor(
    private readonly getAccounts: GetAccounts,
  ) { }
  async handle(httpRequest: HttpRequest<GetAccounts.Params, any, any>): Promise<HttpResponse> {
    try {
      const { limit = 10, offset = 0, term = '' } = httpRequest.query;
      const accounts = await this.getAccounts.get({ limit: Number(limit), offset: Number(offset), term });

      return ok(accounts);
    } catch (error) {
      return serverError(error);
    }
  }
}
