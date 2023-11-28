import { GetCreditsToScheduleTask } from "domain/usecases";

export interface GetCreditsToScheduleTaskRepository {
  getCredits(): Promise<GetCreditsToScheduleTask.Return>;
}
