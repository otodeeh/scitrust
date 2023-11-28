import { GetNotificationsRepository } from "data/protocols";
import { GetNotifications } from "domain/usecases";

export class DbGetNotifications implements GetNotifications {
  constructor(
    private readonly getNotificationsRepository: GetNotificationsRepository,
  ) { }
  async getList(params: GetNotifications.Params): Promise<GetNotifications.Return> {
      const newNotifications = await this.getNotificationsRepository.getList(params);
      return newNotifications;
  }
}
