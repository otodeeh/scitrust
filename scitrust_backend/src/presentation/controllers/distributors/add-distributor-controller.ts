import { AddDistributor, LoadAccountByEmail } from "domain/usecases";
import { InvalidUniqueField } from "presentation/errors";
import {
  badRequest,
  ok,
  serverError,
  unauthorized
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
} from "presentation/protocols";

export class AddDistributorController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly loadAccountByEmail: LoadAccountByEmail,
    private readonly addDistributor: AddDistributor,
  ) { }
  async handle(httpRequest: HttpRequest<AddDistributor.Params, any, any>): Promise<HttpResponse> {
    try {
      const error = this.validation.validate({ ...httpRequest.body.account, ...httpRequest.body.distributor });
      if (error) {
        return badRequest(error);
      }

      const account = await this.loadAccountByEmail.load({ email: httpRequest.body.account.email });
      if (account) {
        return badRequest(new InvalidUniqueField('email'));
      }

      const data: AddDistributor.Params = {
        account: { ...httpRequest.body.account, role: 'distributor_user', password: 'Pratica' },
        distributor: httpRequest.body.distributor
      }
      const distributorId = await this.addDistributor.add(data);
      if (!distributorId) {
        return unauthorized();
      }

      return ok(distributorId);
    } catch (error) {
      return serverError(error);
    }
  }
}
