import { GetEquipmentById } from "domain/usecases";

export interface GetEquipmentByIdRepository {
  getById(params: GetEquipmentById.Params): Promise<GetEquipmentById.Return>;
}
