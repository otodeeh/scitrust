import { AccountModel } from "domain/models";

export interface Authentication {
  auth(params: Authentication.Params): Promise<Authentication.Return>;
}

export namespace Authentication {
  export type Params = { email: string, password: string };
  export type Return = Omit<AccountModel, "accountRoleId" | "createdAt" | "deletedAt" | "deletedAt" | "distributorId" | "password" | "updatedAt" >
}
