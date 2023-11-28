import { PartModel } from "domain/models";

export interface GetParts {
  get(params: GetParts.Params): Promise<GetParts.Return>;
}

export namespace GetParts {
  export type Params = {
    term: string
    offset: number
    limit: number
  };
  export type Return = {
    parts: PartModel[]
    hasNextPage: boolean
    total: number
  };
}
