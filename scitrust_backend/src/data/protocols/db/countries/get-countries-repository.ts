import { GetCountries } from "domain/usecases";

export interface GetCountriesRepository {
  get(params: GetCountries.Params): Promise<GetCountries.Return>;
}
