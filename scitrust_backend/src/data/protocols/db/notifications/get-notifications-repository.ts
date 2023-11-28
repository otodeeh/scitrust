import { GetNotifications } from "domain/usecases";

export interface GetNotificationsRepository {
  getList(params: GetNotifications.Params): Promise<GetNotifications.Return>;
}
