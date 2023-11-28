import { GetTechnicalSupportListRepository } from "data/protocols";
import { GetTechnicalSupportList } from "domain/usecases";

export class DbGetTechnicalSupportList implements GetTechnicalSupportList {
  constructor(
    private readonly getTechnicalSupportListRepository: GetTechnicalSupportListRepository,
  ) { }
  async getList(params: GetTechnicalSupportList.Params): Promise<GetTechnicalSupportList.Return> {
      const newTechnicalSupportList = await this.getTechnicalSupportListRepository.getList(params);
      return newTechnicalSupportList;
  }
}
