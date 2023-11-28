import { GetCountriesRepository } from "data/protocols";
import { GetCountries } from "domain/usecases";

export class DbGetCountries implements GetCountries {
  constructor(
    private readonly getCountriesRepository: GetCountriesRepository,
  ) { }
  async get(params: GetCountries.Params): Promise<GetCountries.Return> {
      const countries = await this.getCountriesRepository.get(params);
      return countries;
  }
}
