import { AddEquipmentsFromProtheusRepository } from "data/protocols";
import { AddEquipmentsFromProtheus } from "domain/usecases";

export class DbAddEquipmentsFromProtheus implements AddEquipmentsFromProtheus {
  constructor(
    private readonly addEquipmentsFromProtheusRepository: AddEquipmentsFromProtheusRepository,
  ) { }
  async add(params: AddEquipmentsFromProtheus.Params): Promise<AddEquipmentsFromProtheus.Return> {
      const equipments = await this.addEquipmentsFromProtheusRepository.add(params);
      return equipments;
  }
}
