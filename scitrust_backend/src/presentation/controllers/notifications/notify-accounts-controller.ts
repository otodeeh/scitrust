import { GetNotifications, NotifyAccount } from "domain/usecases";
import {
  composeNotificationData,
  ok,
  serverError
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse
} from "presentation/protocols";

export class NotifyAccountsController implements Controller {
  constructor(
    private readonly getNotifications: GetNotifications,
    private readonly notifyAccount: NotifyAccount,
  ) { }
  async handle(httpRequest: HttpRequest<any, any, any>): Promise<HttpResponse> {
    try {
      const response = await this.getNotifications.getList({ accountId: 0, limit: 100, offset: 0, term: '', status: 'unread', account: true, notify: true });
      if (response.notifications.length === 0) {
        return ok({});
      }

      response.notifications.map(async (notification) => {
        const dataFromNotification = JSON.parse(notification.data)

        const {
          description, title
        } = composeNotificationData({ language: notification.account.language, technicalSupportId: dataFromNotification?.technicalSupportId, type: notification.type })

        const data = {
          data: {
            description,
            title,
            type: notification.type,
            url: `${notification.account.language}/services/${dataFromNotification?.technicalSupportId}`,
          },
          externalId: notification.id,
          report: `comex_report/${notification.account.email}`,
          subscription: notification.account.subscription,
        }

        await this.notifyAccount.notify(data)
      })


      return ok({});
    } catch (error) {
      return serverError(error);
    }
  }
}