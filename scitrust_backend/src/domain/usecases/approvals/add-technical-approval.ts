import { ApprovalModel } from "domain/models";

export interface AddTechnicalApproval {
  addTechnicalApproval(params: AddTechnicalApproval.Params): Promise<AddTechnicalApproval.Return>;
}

export namespace AddTechnicalApproval {
  export type Params = {
    accountId: number,
    technicalSupportId: number,
    approvedParts: {
      amount: number,
      historicalValue: number,
      partId: number,
    }[],
  };
  export type Return = ApprovalModel;
}
