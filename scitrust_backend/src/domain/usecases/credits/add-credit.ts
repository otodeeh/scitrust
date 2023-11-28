import { CreditModel } from "domain/models";

export interface AddCredit {
  addCredit(params: AddCredit.Params): Promise<AddCredit.Return>;
}

export namespace AddCredit {
  export type Params = Omit<CreditModel, "id" | "updatedAt" | "approvalId" | "erpSync"> & {
    creditId: number;
    distributorCode: string
  };
  export type Return = {
    approval: {
      technicalSupport: {
        id: number;
        equipment: {
          distributor: {
            codeProtheus: string;
          };
        };
      };
      _count: {
        credits: number;
      };
    };
  } & {
    id: number;
    approvalId: number;
    balance: number;
    createdAt: Date;
    dueAt: Date;
    erpSync: boolean;
    nature: string;
    observation: string;
    ptax: number;
    value: number;
  };
}
