import { HashComparer, Hasher, LoadAccountByTokenRepository, UpdateAccountPasswordRepository } from "data/protocols";
import {
  RecoverAccountPassword,
} from "domain/usecases";

export class DbRecoverAccountPassword implements RecoverAccountPassword {
  constructor(
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository,
    private readonly hashComparerHashComparer: HashComparer,
    private readonly hasher: Hasher,
    private readonly updateAccountPasswordRepository: UpdateAccountPasswordRepository
  ) { }
  async recover(
    params: RecoverAccountPassword.Params
  ): Promise<RecoverAccountPassword.Return> {
    const account = await this.loadAccountByTokenRepository.loadByToken({
      token: params.token,
      roles: ['system-role-admin'],
    });
    if (account) {
      let isValid = true
      if (params?.oldPassword) {
        isValid = await this.hashComparerHashComparer.compare(
          params.oldPassword,
          account.password
        );
      }

      if (isValid) {
        const hashedPassword = await this.hasher.hash(
          params.password
        );
        await this.updateAccountPasswordRepository.updatePassword(
          account.id,
          hashedPassword
        );
        return account;
      }
    }
    return null;
  }
}
