import { AddDistributorRepository, Hasher, LoadAccountByEmailRepository } from "data/protocols";
import { AddDistributor } from "domain/usecases";

export class DbAddDistributor implements AddDistributor {
  constructor(
    private readonly hasher: Hasher,
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    private readonly addDistributorRepository: AddDistributorRepository,
  ) { }
  async add(params: AddDistributor.Params): Promise<AddDistributor.Return> {
    const { account, distributor } = params
    const accountByEmail = await this.loadAccountByEmailRepository.load({ email: account.email });

    if (!accountByEmail) {
      const hashedPassword = await this.hasher.hash(account.password);
      const newDistributor = await this.addDistributorRepository.add({
        account: { ...account, password: hashedPassword },
        distributor
      });

      return newDistributor;
    }
    return null;
  }
}
