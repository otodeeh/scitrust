import { LoadAccountByToken } from "domain/usecases";
import { ok, serverError, unauthorized } from "presentation/helpers";
import { HttpRequest, HttpResponse, Middleware } from "presentation/protocols";
export class AuthMiddleware implements Middleware {
  constructor(
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly roles: string[]
  ) {}
  async handle(httpRequest: HttpRequest<any, any, any>): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers?.["x-access-token"];
      if (accessToken) {
        const account = await this.loadAccountByToken.load({ token: accessToken });
        if (account) {
          return ok({ accountId: account.id });
        }
      }
      return unauthorized();
    } catch (error) {
      return serverError(error);
    }
  }
}
