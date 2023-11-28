import { UpdateNciRepository } from "data/protocols";
import { UpdateNciToProtheus } from "src/domain/usecases";

export class UpdateNciProtheus implements UpdateNciToProtheus {
  constructor(
    private readonly updateNciRepository: UpdateNciRepository,
  ) { }
  async request(params: UpdateNciToProtheus.Params): Promise<UpdateNciToProtheus.Return> {
      const updatedNci = await this.updateNciRepository.request(params);
      return updatedNci;
  }
}
