import { UpdateNotifications } from "domain/usecases";

export interface UpdateNotificationsRepository {
  update(params: UpdateNotifications.Params): Promise<UpdateNotifications.Return>;
}
