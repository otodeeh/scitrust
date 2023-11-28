import { LoadAccountByToken } from "domain/usecases";

export interface LoadAccountByTokenRepository {
  loadByToken(params: LoadAccountByToken.Params): Promise<LoadAccountByToken.Return>;
}

