import { UpdateAccountSubscriptionByIdRepository } from "data/protocols";
import { UpdateAccountSubscriptionById } from "domain/usecases";

export class DbUpdateAccountSubscriptionById implements UpdateAccountSubscriptionById {
  constructor(
    private readonly updateAccountSubscriptionByIdRepository: UpdateAccountSubscriptionByIdRepository,
  ) { }
  async updateSubscriptionById(params: UpdateAccountSubscriptionById.Params): Promise<UpdateAccountSubscriptionById.Return> {
      const updatedAccount = await this.updateAccountSubscriptionByIdRepository.updateSubscriptionById(params);
      return updatedAccount;
  }
}
