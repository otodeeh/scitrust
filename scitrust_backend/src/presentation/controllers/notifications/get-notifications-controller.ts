import { GetNotifications, LoadAccountByToken } from "domain/usecases";
import {
  badRequest,
  ok,
  serverError
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse
} from "presentation/protocols";

export class GetNotificationsController implements Controller {
  constructor(
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly getNotifications: GetNotifications,
  ) {}
  async handle(httpRequest: HttpRequest<GetNotifications.Params, any, any>): Promise<HttpResponse> {
    try {
      const xAccessToken = httpRequest.headers["x-access-token"]
      const account = await this.loadAccountByToken.load({ token: xAccessToken, roles: ['system-role-admin'] });

      const { limit = 10, offset = 0, term = '', status = '' } = httpRequest.query;

      const statusList = ['', 'read', 'unread']
      if (!statusList.includes(status)) {
        return badRequest(new Error('Invalid status: allowed statuses are "read", "unread", ""'));
      }

      const notifications = await this.getNotifications.getList({ accountId: account.id, limit: Number(limit), offset: Number(offset), term, status });

      return ok(notifications);
    } catch (error) {
      return serverError(error);
    }
  }
}
