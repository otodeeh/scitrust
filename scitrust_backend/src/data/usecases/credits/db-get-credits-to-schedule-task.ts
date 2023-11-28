import { GetCreditsToScheduleTaskRepository } from "data/protocols";
import { GetCreditsToScheduleTask } from "domain/usecases";

export class DbGetCreditsToScheduleTask implements GetCreditsToScheduleTask {
  constructor(
    private readonly getCreditsToScheduleTaskRepository: GetCreditsToScheduleTaskRepository,
  ) { }
  async getCredits(): Promise<GetCreditsToScheduleTask.Return> {
      const credits = await this.getCreditsToScheduleTaskRepository.getCredits();
      return credits;
  }
}
