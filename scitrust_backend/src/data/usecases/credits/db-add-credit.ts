import { AddCreditRepository } from "data/protocols";
import { AddCredit } from "src/domain/usecases";

export class DbAddCredit implements AddCredit {
  constructor(
    private readonly addCreditRepository: AddCreditRepository,
  ) { }
  async addCredit(params: AddCredit.Params): Promise<AddCredit.Return> {
      const credit = await this.addCreditRepository.addCredit(params);
      return credit;
  }
}
