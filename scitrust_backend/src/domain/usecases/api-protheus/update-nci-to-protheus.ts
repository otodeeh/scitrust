export interface UpdateNciToProtheus {
  request(params: UpdateNciToProtheus.Params): Promise<UpdateNciToProtheus.Return>;
}

export namespace UpdateNciToProtheus {
  export type Params = {
    externalId: string;
    distributorCode: string,
    technicalSupport: string
  }
  export type Return = {
    creditId: number;
  };
}
