import { ClientModel } from "domain/models";

export interface GetClients {
  get(params: GetClients.Params): Promise<GetClients.Return>;
}

export namespace GetClients {
  export type Params = {
    distributorId: number
    term: string
    offset: number
    limit: number
  };
  export type Return = {
    clients: ClientModel[]
    hasNextPage: boolean
    total: number
  };
}
