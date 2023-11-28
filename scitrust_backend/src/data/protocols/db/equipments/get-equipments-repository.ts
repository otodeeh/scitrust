import { GetEquipments } from "domain/usecases";

export interface GetEquipmentsRepository {
  get(params: GetEquipments.Params): Promise<GetEquipments.Return>;
}
