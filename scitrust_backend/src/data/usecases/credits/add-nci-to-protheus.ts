import { AddNciRepository } from "data/protocols";
import { AddNciToProtheus } from "src/domain/usecases";

export class AddNciProtheus implements AddNciToProtheus {
  constructor(
    private readonly addNciRepository: AddNciRepository,
  ) { }
  async request(params: AddNciToProtheus.Params): Promise<AddNciToProtheus.Return> {
      const newNci = await this.addNciRepository.request(params);
      return newNci;
  }
}
