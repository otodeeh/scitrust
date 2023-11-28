import { NotifyAccountRepository } from "data/protocols";
import { NotifyAccount } from "domain/usecases";

export class WsNotifyAccount implements NotifyAccount {
  constructor(
    private readonly notifyAccountRepository: NotifyAccountRepository,
  ) { }
  async notify(params: NotifyAccount.Params): Promise<NotifyAccount.Return> {
      const response = await this.notifyAccountRepository.request(params);
      return response;
  }
}
