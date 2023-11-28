import { AccountModel } from "domain/models";

export interface LoadAccountByEmail {
  load(params: LoadAccountByEmail.Params): Promise<LoadAccountByEmail.Return>;
}

export namespace LoadAccountByEmail {
  export type Params = { email: string };
  export type Return = AccountModel;
}
