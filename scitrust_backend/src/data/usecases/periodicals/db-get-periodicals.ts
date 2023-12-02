import { GetPeriodicalsRepository } from "src/data/protocols/db/periodicals/get-periodicals-repository";
import { GetPeriodical } from "src/domain/usecases/periodicals/get-periodical";

export class DbGetPeriodicals implements GetPeriodical {
  constructor(
    private readonly getPeriodicalsRepository: GetPeriodicalsRepository,
  ) { }
  async get(params: GetPeriodical.Params): Promise<GetPeriodical.Return> {
      const periodicals = await this.getPeriodicalsRepository.get(params);
      return periodicals;
  }
}
