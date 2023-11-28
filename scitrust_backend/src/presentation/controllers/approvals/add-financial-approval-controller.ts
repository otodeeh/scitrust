import { AddFinancialApproval, LoadAccountByToken } from "domain/usecases";
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

export class AddFinancialApprovalController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly addFinancialApproval: AddFinancialApproval,
  ) { }
  async handle(httpRequest: HttpRequest<AddFinancialApproval.Params, Pick<AddFinancialApproval.Params, "technicalSupportId">, any>): Promise<HttpResponse> {
    try {
      const { nature, observation = '', ptax } = httpRequest.body;
      const { technicalSupportId } = httpRequest.params;

      const error = this.validation.validate({ nature, technicalSupportId: Number(technicalSupportId), ptax });
      if (error) {
        return badRequest(error);
      }
      
      const xAccessToken = httpRequest.headers["x-access-token"]
      const account = await this.loadAccountByToken.load({ token: xAccessToken, roles: ['system-role-admin'] });

      const technicalSupports = await this.addFinancialApproval.addFinancialApproval({ accountId: account.id, nature, observation, ptax, technicalSupportId: Number(technicalSupportId) });

      return ok(technicalSupports);
    } catch (error) {
      return serverError(error);
    }
  }
}
