import { AddEquipmentsFromProtheus } from "domain/usecases";

export interface AddEquipmentsFromProtheusRepository {
  add(params: AddEquipmentsFromProtheus.Params): Promise<AddEquipmentsFromProtheus.Return>;
}
