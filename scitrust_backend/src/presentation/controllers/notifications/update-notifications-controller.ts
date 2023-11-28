import { UpdateNotifications } from "domain/usecases";
import {
  ok,
  serverError
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse
} from "presentation/protocols";

export class UpdateNotificationsController implements Controller {
  constructor(
    private readonly updateNotifications: UpdateNotifications,
  ) { }
  async handle(httpRequest: HttpRequest<UpdateNotifications.Params, any, any>): Promise<HttpResponse> {
    try {
      const { notifications } = httpRequest.body;
      const updatedNotifications = await this.updateNotifications.update({ notifications });
      return ok(updatedNotifications);
    } catch (error) {
      return serverError(error);
    }
  }
}
