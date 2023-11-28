
export interface GetTechnicalSupportList {
  getList(params: GetTechnicalSupportList.Params): Promise<GetTechnicalSupportList.Return>;
}

export namespace GetTechnicalSupportList {
  export type Params = {
    distributorId: number
    term: string
    offset: number
    limit: number
    status: string
  };
  export type Return = {
    technicalSupport: {
      id: number,
      approvals: {
        id: number,
        type: string,
        approvedParts: {
          id: number,
          amount: number,
          historicalValue: number
        }[],
      }[],
      createdAt: Date,
      equipment: {
        id: number,
        serialNumber: string,
        description: string,
        salesRecord: {
          client: {
            id: number,
            name: string,
          },
          distributor: {
              id: number,
              name: string,
              codeProtheus: string
          }
        }
      },
      replacedParts: {
        id: number,
        historicalValue: number,
      }[],
      events: {
        id: number,
        type: string,
        createdAt: Date
      }[],
    }[],
    hasNextPage: boolean
    total: number
  };
}
