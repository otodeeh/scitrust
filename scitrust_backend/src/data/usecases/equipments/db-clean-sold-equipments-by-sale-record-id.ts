import { CleanSoldEquipmentsBySaleRecordIdRepository } from "data/protocols";
import { CleanSoldEquipmentsBySaleRecordId } from "domain/usecases";

export class DbCleanSoldEquipmentsBySaleRecordId implements CleanSoldEquipmentsBySaleRecordId {
  constructor(
    private readonly cleanSoldEquipmentsBySaleRecordIdRepository: CleanSoldEquipmentsBySaleRecordIdRepository,
  ) { }
  async clean(params: CleanSoldEquipmentsBySaleRecordId.Params): Promise<CleanSoldEquipmentsBySaleRecordId.Return> {
      const equipments = await this.cleanSoldEquipmentsBySaleRecordIdRepository.clean(params);
      return equipments;
  }
}
