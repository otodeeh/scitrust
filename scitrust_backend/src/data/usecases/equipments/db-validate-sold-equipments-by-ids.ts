import { ValidateSoldEquipmentsByIdsRepository } from "data/protocols";
import { ValidateSoldEquipmentsByIds } from "domain/usecases";

export class DbValidateSoldEquipmentsByIds implements ValidateSoldEquipmentsByIds {
  constructor(
    private readonly validateSoldEquipmentsByIdsRepository: ValidateSoldEquipmentsByIdsRepository,
  ) { }
  async validate(params: ValidateSoldEquipmentsByIds.Params): Promise<ValidateSoldEquipmentsByIds.Return> {
      const equipments = await this.validateSoldEquipmentsByIdsRepository.validate(params);
      return equipments;
  }
}
