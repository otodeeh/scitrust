import { GenericGetApiProtheus } from "domain/usecases";

export interface GenericGetApiProtheusRepository {
  request<K, R>(params: GenericGetApiProtheus.Params): Promise<GenericGetApiProtheus.Return<K, R>>;
}

