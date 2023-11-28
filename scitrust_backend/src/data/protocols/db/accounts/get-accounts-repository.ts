import { GetAccounts } from "domain/usecases";

export interface GetAccountsRepository {
  get(params: GetAccounts.Params): Promise<GetAccounts.Return>;
}
