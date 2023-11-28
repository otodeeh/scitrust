import { Encrypter, HashComparer, LoadAccountByEmailRepository, UpdateAccountAccessTokenRepository } from "data/protocols";
import { Authentication } from "domain/usecases";

export class DbAuthentication implements Authentication {
  constructor(
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    private readonly hashComparerHashComparer: HashComparer,
    private readonly encrypter: Encrypter,
    private readonly updateAccessTokenRepository: UpdateAccountAccessTokenRepository
  ) { }
  async auth(
    params: Authentication.Params
  ): Promise<Authentication.Return> {
    const { email, password } = params

    const account =
      await this.loadAccountByEmailRepository.load(
        { email }
      );
    if (account) {
      const isValid = await this.hashComparerHashComparer.compare(
        password,
        account.password
      );
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(account.id);
        await this.updateAccessTokenRepository.updateAccessToken(
          account.id,
          accessToken
        );
        return { token: accessToken, contact: account.contact, id: account.id, email: account.email, language: account.language, phone: account.phone, role: account.role };
      }
    }
    return null;
  }
}
