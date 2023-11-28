import { AccountModel } from "domain/models";

export interface AddAccount {
  add(params: AddAccount.Params): Promise<AddAccount.Return>;
}

export namespace AddAccount {
  export type Params = Omit<AccountModel, "id" | "createdAt" | "deletedAt" | "token" | "updatedAt">;
  export type Return = { id: number };
}
