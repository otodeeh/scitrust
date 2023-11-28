
export interface GetSaleRecordById {
  getById(params: GetSaleRecordById.Params): Promise<GetSaleRecordById.Return>;
}

export namespace GetSaleRecordById {
  export type Params = { id: number };
  export type Return = {
    client: {
      city: string,
      country: {
        id: number,
        name: string
      },
      email: string,
      id: number,
      name: string,
      phone: string,
      type: string
    },
    distributorOrder: string,
    equipments: {
      id: number,
      description: string,
      installationDate: Date,
      serialNumber: string
    }[],
    files: {
      description: string,
      extension: string,
      id: number,
      url: string
    }[],
    id: number,
    observation: string,
    saleDate: Date
  };
}
