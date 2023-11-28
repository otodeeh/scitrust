import { GetCreditsListRepository } from "data/protocols";
import { GetCreditsList } from "domain/usecases";

export class DbGetCreditsList implements GetCreditsList {
  constructor(
    private readonly getCreditsListRepository: GetCreditsListRepository,
  ) { }
  async getList(params: GetCreditsList.Params): Promise<GetCreditsList.Return> {
      const newCreditsList = await this.getCreditsListRepository.getList(params);
      return newCreditsList;
  }
}
