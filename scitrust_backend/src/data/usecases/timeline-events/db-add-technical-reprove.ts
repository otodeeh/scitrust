import { AddTechnicalReproveRepository } from "data/protocols";
import { AddTechnicalReprove } from "domain/usecases";

export class DbAddTechnicalReprove implements AddTechnicalReprove {
  constructor(
    private readonly addTechnicalReproveRepository: AddTechnicalReproveRepository,
  ) { }
  async addTechnicalReprove(params: AddTechnicalReprove.Params): Promise<AddTechnicalReprove.Return> {
      const newTechnicalReprove = await this.addTechnicalReproveRepository.addTechnicalReprove(params);
      return newTechnicalReprove;
  }
}
