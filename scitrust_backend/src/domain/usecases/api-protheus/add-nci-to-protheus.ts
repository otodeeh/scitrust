export interface AddNciToProtheus {
  request(params: AddNciToProtheus.Params): Promise<AddNciToProtheus.Return>;
}

export namespace AddNciToProtheus {
  export type Params = {
    externalId: string;
    distributorCode: string,
    dueDate: Date,
    observation: string,
    option: string,
    ptax: number,
    technicalSupport: string,
    value: number
  }
  export type Return = {
    creditId: number;
  };
}
