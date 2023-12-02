import { GetPeriodical } from "domain/usecases";

export interface GetPeriodicalsRepository {
  get(params: GetPeriodical.Params): Promise<GetPeriodical.Return>;
}
