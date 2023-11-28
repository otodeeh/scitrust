import { NotifyAccount } from "domain/usecases";

export interface NotifyAccountRepository {
  request(params: NotifyAccount.Params): Promise<NotifyAccount.Return>;
}

