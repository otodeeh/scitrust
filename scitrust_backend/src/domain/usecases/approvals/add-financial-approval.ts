import { ApprovalModel } from "domain/models";

export interface AddFinancialApproval {
  addFinancialApproval(params: AddFinancialApproval.Params): Promise<AddFinancialApproval.Return>;
}

export namespace AddFinancialApproval {
  export type Params = {
    accountId: number,
    nature: string,
    observation: string,
    ptax: number,
    technicalSupportId: number,
  };
  export type Return = ApprovalModel;
}
