
export interface GetAccounts {
  get(params: GetAccounts.Params): Promise<GetAccounts.Return>;
}

export namespace GetAccounts {
  export type Params = {
    term: string
    offset: number
    limit: number
  };
  export type Return = {
    accounts: {
      contact: string,
      createdAt: Date,
      distributor: {
        codeProtheus: string,
        id: number,
        name: string
      }
      email: string,
      id: number,
      language: string,
      phone: string,
      role: string,
    }[]
    hasNextPage: boolean
    total: number
  };
}
