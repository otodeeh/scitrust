import { AccountModel, DistributorModel } from "domain/models";

export interface AddDistributor {
  add(params: AddDistributor.Params): Promise<AddDistributor.Return>;
}

export namespace AddDistributor {
  export type Params = {
    account: Omit<AccountModel, "id" | "createdAt" | "deletedAt" | "token" | "updatedAt" | "allowNotifications">
    distributor: Omit<DistributorModel, "id" | "createdAt" | "updatedAt" | "accounts" | "deletedAt" | "equipments">
  };
  export type Return = Pick<DistributorModel, "id">;
}
