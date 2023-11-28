import { ValidateSoldEquipmentsByIds } from "domain/usecases";

export interface ValidateSoldEquipmentsByIdsRepository {
  validate(params: ValidateSoldEquipmentsByIds.Params): Promise<ValidateSoldEquipmentsByIds.Return>;
}
