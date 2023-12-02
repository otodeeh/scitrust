import { AddTechnicalApproval, LoadAccountByToken } from "domain/usecases";
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

export class AddTechnicalApprovalController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly addTechnicalApproval: AddTechnicalApproval,
  ) { }
  async handle(httpRequest: HttpRequest<Omit<AddTechnicalApproval.Params, "">, Pick<AddTechnicalApproval.Params, "technicalSupportId">, any>): Promise<HttpResponse> {
    try {
      const { approvedParts } = httpRequest.body;
      const { technicalSupportId } = httpRequest.params;

      const error = this.validation.validate({ technicalSupportId: Number(technicalSupportId) });
      if (error) {
        return badRequest(error);
      }

      const xAccessToken = httpRequest.headers["x-access-token"]
      const account = await this.loadAccountByToken.load({ token: xAccessToken });

      const technicalSupports = await this.addTechnicalApproval.addTechnicalApproval({ accountId: account.id, approvedParts, technicalSupportId: Number(technicalSupportId) });

      return ok(technicalSupports);
    } catch (error) {
      return serverError(error);
    }
  }
}
