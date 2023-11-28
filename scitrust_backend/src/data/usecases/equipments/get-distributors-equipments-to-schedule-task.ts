import { GenericGetApiProtheusRepository } from "data/protocols";
import { GenericGetApiProtheus } from "domain/usecases";

export class GetDistributorsEquipmentsFromProtheus implements GenericGetApiProtheus {
  constructor(
    private readonly genericGetApiProtheusRepository: GenericGetApiProtheusRepository,
  ) { }
  async request<K, R>(params: GenericGetApiProtheus.Params): Promise<GenericGetApiProtheus.Return<K, R>> {
      const equipments = await this.genericGetApiProtheusRepository.request<K, R>(params);
      return equipments;
  }
}

