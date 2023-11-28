import { GetDistributorToScheduleTask } from "domain/usecases";

export interface GetDistributorToScheduleTaskRepository {
  get(): Promise<GetDistributorToScheduleTask.Return>;
}
