import { AddFinancialApproval } from "domain/usecases";

export interface AddFinancialApprovalRepository {
  addFinancialApproval(params: AddFinancialApproval.Params): Promise<AddFinancialApproval.Return>;
}
