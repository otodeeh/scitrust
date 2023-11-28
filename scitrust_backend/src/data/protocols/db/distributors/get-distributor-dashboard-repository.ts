import { GetDistributorDashboard } from "domain/usecases";

export interface GetDistributorDashboardRepository {
  getDashboard(params: GetDistributorDashboard.Params): Promise<GetDistributorDashboard.Return>;
}
