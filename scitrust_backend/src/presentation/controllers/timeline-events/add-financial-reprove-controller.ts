import { AddFinancialReprove, LoadAccountByToken } from "domain/usecases";
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

export class AddFinancialReproveController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly addFinancialReprove: AddFinancialReprove,
  ) { }
  async handle(httpRequest: HttpRequest<Omit<AddFinancialReprove.Params, "accountId" | "technicalSupportId">, Pick<AddFinancialReprove.Params, "technicalSupportId">, any>): Promise<HttpResponse> {
    try {
      const { technicalSupportId } = httpRequest.params;
      const { observation = '' } = httpRequest.body;

      const error = this.validation.validate({ technicalSupportId: Number(technicalSupportId) });
      if (error) {
        return badRequest(error);
      }

      const xAccessToken = httpRequest.headers["x-access-token"]
      const account = await this.loadAccountByToken.load({ token: xAccessToken, roles: ['system-role-admin'] });

      const financialReprove = await this.addFinancialReprove.addFinancialReprove({ technicalSupportId: Number(technicalSupportId), observation, accountId: account.id });

      return ok(financialReprove);
    } catch (error) {
      return serverError(error);
    }
  }
}
