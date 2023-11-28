import { AddAccount } from "domain/usecases";

export interface AddAccountRepository {
  add(params: AddAccount.Params): Promise<AddAccount.Return>;
}
