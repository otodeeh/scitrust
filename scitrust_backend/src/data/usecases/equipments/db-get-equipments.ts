import { GetEquipmentsRepository } from "data/protocols";
import { GetEquipments } from "domain/usecases";

export class DbGetEquipments implements GetEquipments {
  constructor(
    private readonly getEquipmentsRepository: GetEquipmentsRepository,
  ) { }
  async get(params: GetEquipments.Params): Promise<GetEquipments.Return> {
      const equipments = await this.getEquipmentsRepository.get(params);
      return equipments;
  }
}
