import { Decrypter, LoadAccountByTokenRepository } from "data/protocols";
import { LoadAccountByToken } from "domain/usecases";

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor(
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository
  ) { }
  async load(params: LoadAccountByToken.Params): Promise<LoadAccountByToken.Return> {
    const {  token } = params
    let accessToken: string;

    try {
      accessToken = await this.decrypter.decrypt(token);
    } catch (error) {
      return null;
    }

    if (token) {
      const account = await this.loadAccountByTokenRepository.loadByToken({
        token
      });
      if (account) {
        return account;
      }
    }
    return null;
  }
}
