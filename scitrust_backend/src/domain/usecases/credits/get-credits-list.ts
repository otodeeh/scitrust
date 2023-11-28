
export interface GetCreditsList {
  getList(params: GetCreditsList.Params): Promise<GetCreditsList.Return>;
}

export namespace GetCreditsList {
  export type Params = {
    distributorId: number
    limit: number
    status: string
    term: string
    offset: number
  };
  export type Return = {
    credits: {
      balance: number,
      createdAt: Date,
      distributor: {
        codeProtheus: string,
      },
      dueAt: Date,
      id: number,
      value: number,
      approval: {
        id: number,
        technicalSupport: {
          id: number,
          equipment: {

            salesRecord: {
              client: {
                name: string,
              }
            }
          }
        }
      }
    }[],
    hasNextPage: boolean
    total: number
  };
}
