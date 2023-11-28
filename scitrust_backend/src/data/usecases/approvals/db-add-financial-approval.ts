import { AddFinancialApprovalRepository } from "data/protocols";
import { AddFinancialApproval } from "domain/usecases";

export class DbAddFinancialApproval implements AddFinancialApproval {
  constructor(
    private readonly addFinancialApprovalRepository: AddFinancialApprovalRepository,
  ) { }
  async addFinancialApproval(params: AddFinancialApproval.Params): Promise<AddFinancialApproval.Return> {
      const newFinancialApproval = await this.addFinancialApprovalRepository.addFinancialApproval(params);
      return newFinancialApproval;
  }
}
