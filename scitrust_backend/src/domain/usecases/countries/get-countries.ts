import { CountryModel } from "domain/models";

export interface GetCountries {
  get(params: GetCountries.Params): Promise<GetCountries.Return>;
}

export namespace GetCountries {
  export type Params = {
    term: string
    offset: number
    limit: number
  };
  export type Return = {
    countries: CountryModel[]
    hasNextPage: boolean
    total: number
  };
}
