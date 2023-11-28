import { EquipmentModel } from "domain/models";

export interface CleanSoldEquipmentsBySaleRecordId {
  clean(params: CleanSoldEquipmentsBySaleRecordId.Params): Promise<CleanSoldEquipmentsBySaleRecordId.Return>;
}

export namespace CleanSoldEquipmentsBySaleRecordId {
  export type Params = { saleRecordId: number };
  export type Return = EquipmentModel[];
}
