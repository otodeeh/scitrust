import { GetEquipmentByIdRepository } from "data/protocols";
import { GetEquipmentById } from "domain/usecases";

export class DbGetEquipmentById implements GetEquipmentById {
  constructor(
    private readonly getEquipmentByIdRepository: GetEquipmentByIdRepository,
  ) { }
  async getById(params: GetEquipmentById.Params): Promise<GetEquipmentById.Return> {
      const newEquipment = await this.getEquipmentByIdRepository.getById(params);
      return newEquipment;
  }
}
