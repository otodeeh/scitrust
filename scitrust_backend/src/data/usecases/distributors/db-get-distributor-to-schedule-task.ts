import { GetDistributorToScheduleTaskRepository } from "data/protocols";
import { GetDistributorToScheduleTask } from "domain/usecases";

export class DbGetDistributorToScheduleTask implements GetDistributorToScheduleTask {
  constructor(
    private readonly getDistributorToScheduleTaskRepository: GetDistributorToScheduleTaskRepository,
  ) { }
  async get(): Promise<GetDistributorToScheduleTask.Return> {
      const distributors = await this.getDistributorToScheduleTaskRepository.get();
      return distributors;
  }
}
