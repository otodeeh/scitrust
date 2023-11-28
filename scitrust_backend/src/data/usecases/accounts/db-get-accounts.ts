import { GetAccountsRepository } from "data/protocols";
import { GetAccounts } from "domain/usecases";

export class DbGetAccounts implements GetAccounts {
  constructor(
    private readonly getAccountsRepository: GetAccountsRepository,
  ) { }
  async get(params: GetAccounts.Params): Promise<GetAccounts.Return> {
      const accounts = await this.getAccountsRepository.get(params);
      return accounts;
  }
}
