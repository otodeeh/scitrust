
export interface GetEquipments {
  get(params: GetEquipments.Params): Promise<GetEquipments.Return>;
}

export namespace GetEquipments {
  export type Params = {
    clientId?: number
    distributorId: number
    sold: boolean
    term: string
    offset: number
    limit: number
  };
  export type Return = {
    equipments: {
      acquisitionDate: Date,
      description: string,
      distributor: {
        id: number,
        codeProtheus: string
      },
      id: number,
      installationDate: Date,
      salesRecord: {
        id: number,
        createdAt: Date,
        saleDate: Date,
        client: {
          name: string
        }
      },
      serialNumber: string
    }[]
    hasNextPage: boolean
    total: number
  };
}
