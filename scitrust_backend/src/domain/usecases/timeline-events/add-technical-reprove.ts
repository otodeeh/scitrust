import { EventModel } from "domain/models";

export interface AddTechnicalReprove {
  addTechnicalReprove(params: AddTechnicalReprove.Params): Promise<AddTechnicalReprove.Return>;
}

export namespace AddTechnicalReprove {
  export type Params = {
    accountId: number,
    observation: string,
    technicalSupportId: number,
  };
  export type Return = EventModel;
}
