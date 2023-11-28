import { GetTechnicalSupportByIdRepository } from "data/protocols";
import { GetTechnicalSupportById } from "domain/usecases";

export class DbGetTechnicalSupportById implements GetTechnicalSupportById {
  constructor(
    private readonly getTechnicalSupportByIdRepository: GetTechnicalSupportByIdRepository,
  ) { }
  async getById(params: GetTechnicalSupportById.Params): Promise<GetTechnicalSupportById.Return> {
      const newTechnicalSupport = await this.getTechnicalSupportByIdRepository.getById(params);
      return newTechnicalSupport;
  }
}
