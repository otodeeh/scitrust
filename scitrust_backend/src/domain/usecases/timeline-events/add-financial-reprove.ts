import { EventModel } from "domain/models";

export interface AddFinancialReprove {
  addFinancialReprove(params: AddFinancialReprove.Params): Promise<AddFinancialReprove.Return>;
}

export namespace AddFinancialReprove {
  export type Params = {
    accountId: number,
    observation: string,
    technicalSupportId: number,
  };
  export type Return = EventModel;
}
