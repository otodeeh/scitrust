import { GetClients } from "domain/usecases";

export interface GetClientsRepository {
  get(params: GetClients.Params): Promise<GetClients.Return>;
}
