import { AddFinancialReproveRepository } from "data/protocols";
import { AddFinancialReprove } from "domain/usecases";

export class DbAddFinancialReprove implements AddFinancialReprove {
  constructor(
    private readonly addFinancialReproveRepository: AddFinancialReproveRepository,
  ) { }
  async addFinancialReprove(params: AddFinancialReprove.Params): Promise<AddFinancialReprove.Return> {
      const newFinancialReprove = await this.addFinancialReproveRepository.addFinancialReprove(params);
      return newFinancialReprove;
  }
}
