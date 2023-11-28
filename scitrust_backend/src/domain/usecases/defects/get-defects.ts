import { DefectModel } from "domain/models";

export interface GetDefects {
  get(params: GetDefects.Params): Promise<GetDefects.Return>;
}

export namespace GetDefects {
  export type Params = {
    term: string
    offset: number
    limit: number
  };
  export type Return = {
    defects: DefectModel[]
    hasNextPage: boolean
    total: number
  };
}
