import { EquipmentModel } from "domain/models";

export interface GetEquipmentById {
  getById(params: GetEquipmentById.Params): Promise<GetEquipmentById.Return>;
}

export namespace GetEquipmentById {
  export type Params = { id: number };
  export type Return = EquipmentModel;
}
