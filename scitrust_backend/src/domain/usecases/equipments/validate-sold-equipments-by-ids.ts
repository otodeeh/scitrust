import { EquipmentModel } from "domain/models";

export interface ValidateSoldEquipmentsByIds {
  validate(params: ValidateSoldEquipmentsByIds.Params): Promise<ValidateSoldEquipmentsByIds.Return>;
}

export namespace ValidateSoldEquipmentsByIds {
  export type Params = { id: number }[];
  export type Return = EquipmentModel[];
}
