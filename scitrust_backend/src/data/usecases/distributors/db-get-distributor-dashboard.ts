import { GetDistributorDashboardRepository } from "data/protocols";
import { GetDistributorDashboard } from "domain/usecases";

export class DbGetDistributorDashboard implements GetDistributorDashboard {
  constructor(
    private readonly GetDistributorDashboardRepository: GetDistributorDashboardRepository,
  ) { }
  async getDashboard(params: GetDistributorDashboard.Params): Promise<GetDistributorDashboard.Return> {
      const info = await this.GetDistributorDashboardRepository.getDashboard(params);
      return info;
  }
}
