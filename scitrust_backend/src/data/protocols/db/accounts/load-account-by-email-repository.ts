import { LoadAccountByEmail } from "domain/usecases/accounts/load-account-by-email";

export interface LoadAccountByEmailRepository {
  load(email: LoadAccountByEmail.Params): Promise<LoadAccountByEmail.Return>;
}
