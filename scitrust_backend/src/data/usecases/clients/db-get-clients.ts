import { GetClientsRepository } from "data/protocols";
import { GetClients } from "domain/usecases";

export class DbGetClients implements GetClients {
  constructor(
    private readonly getClientsRepository: GetClientsRepository,
  ) { }
  async get(params: GetClients.Params): Promise<GetClients.Return> {
      const clients = await this.getClientsRepository.get(params);
      return clients;
  }
}
