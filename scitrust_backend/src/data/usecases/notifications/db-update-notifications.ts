import { UpdateNotificationsRepository } from "data/protocols";
import { UpdateNotifications } from "domain/usecases";

export class DbUpdateNotifications implements UpdateNotifications {
  constructor(
    private readonly updateNotificationsRepository: UpdateNotificationsRepository,
  ) { }
  async update(params: UpdateNotifications.Params): Promise<UpdateNotifications.Return> {
      const updatedNotifications = await this.updateNotificationsRepository.update(params);
      return updatedNotifications;
  }
}
