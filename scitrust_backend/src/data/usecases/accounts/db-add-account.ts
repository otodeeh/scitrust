import { AddAccountRepository, Hasher, LoadAccountByEmailRepository } from "data/protocols";
import { AddAccount } from "domain/usecases";

export class DbAddAccount implements AddAccount {
  constructor(
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository,
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
  ) { }
  async add(params: AddAccount.Params): Promise<AddAccount.Return> {
    const { email } = params
    const accountByEmail = await this.loadAccountByEmailRepository.load({ email });

    if (!accountByEmail) {
      const hashedPassword = await this.hasher.hash(params.password);
      const newAccount = await this.addAccountRepository.add({
        ...params,
        password: hashedPassword,
      });
      return newAccount;
    }
    return null;
  }
}
