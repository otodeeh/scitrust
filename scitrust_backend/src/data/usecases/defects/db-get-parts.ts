import { GetDefectsRepository } from "data/protocols";
import { GetDefects } from "domain/usecases";

export class DbGetDefects implements GetDefects {
  constructor(
    private readonly getDefectsRepository: GetDefectsRepository,
  ) { }
  async get(params: GetDefects.Params): Promise<GetDefects.Return> {
      const defects = await this.getDefectsRepository.get(params);
      return defects;
  }
}
