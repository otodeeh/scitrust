import { GetPartsRepository } from "data/protocols";
import { GetParts } from "domain/usecases";

export class DbGetParts implements GetParts {
  constructor(
    private readonly getPartsRepository: GetPartsRepository,
  ) { }
  async get(params: GetParts.Params): Promise<GetParts.Return> {
      const parts = await this.getPartsRepository.get(params);
      return parts;
  }
}
