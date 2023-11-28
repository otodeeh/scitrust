import { AccountModel } from "src/domain/models";

export interface UpdateAccountSubscriptionById {
  updateSubscriptionById(params: UpdateAccountSubscriptionById.Params): Promise<UpdateAccountSubscriptionById.Return>;
}

export namespace UpdateAccountSubscriptionById {
  export type Params = {
    accountId: number,
    subscription: string
  };
  export type Return = Pick<AccountModel, "id" | "subscription">
}
