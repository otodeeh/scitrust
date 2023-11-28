import { AddFinancialReprove } from "domain/usecases";

export interface AddFinancialReproveRepository {
  addFinancialReprove(params: AddFinancialReprove.Params): Promise<AddFinancialReprove.Return>;
}
