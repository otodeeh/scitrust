import { CleanSoldEquipmentsBySaleRecordId } from "domain/usecases";

export interface CleanSoldEquipmentsBySaleRecordIdRepository {
  clean(params: CleanSoldEquipmentsBySaleRecordId.Params): Promise<CleanSoldEquipmentsBySaleRecordId.Return>;
}
