import { AccountModel } from "domain/models";

export interface RecoverAccountPassword {
  recover(params: RecoverAccountPassword.Params): Promise<RecoverAccountPassword.Return>;
}

export namespace RecoverAccountPassword {
  export type Params = { token: string, password: string, oldPassword?: string };
  export type Return = AccountModel;
}