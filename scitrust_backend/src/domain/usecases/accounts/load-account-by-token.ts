import { AccountModel } from "domain/models";

export interface LoadAccountByToken {
  load(params: LoadAccountByToken.Params): Promise<LoadAccountByToken.Return>;
}

export namespace LoadAccountByToken {
  export type Params = { token: string, roles: string[] };
  export type Return = AccountModel;
}