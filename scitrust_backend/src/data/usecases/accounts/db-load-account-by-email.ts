import { LoadAccountByEmailRepository } from "data/protocols";
import { LoadAccountByEmail } from "domain/usecases";

export class DbLoadAccountByEmail implements LoadAccountByEmail {
  constructor(
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  ) { }
  async load(params: LoadAccountByEmail.Params): Promise<LoadAccountByEmail.Return> {

    const account = await this.loadAccountByEmailRepository.load({
      email: params.email
    });

    if (account) {
      return account;
    }

    return null;
  }
}
