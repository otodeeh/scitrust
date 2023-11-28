import { AddTechnicalSupportRepository } from "data/protocols";
import { AddTechnicalSupport } from "domain/usecases";

export class DbAddTechnicalSupport implements AddTechnicalSupport {
  constructor(
    private readonly addTechnicalSupportRepository: AddTechnicalSupportRepository,
  ) { }
  async add(params: AddTechnicalSupport.Params): Promise<AddTechnicalSupport.Return> {
      const newTechnicalSupport = await this.addTechnicalSupportRepository.add(params);
      return newTechnicalSupport;
  }
}
