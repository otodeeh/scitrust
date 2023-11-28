import { UpdateAccountSubscriptionById } from "domain/usecases";

export interface UpdateAccountSubscriptionByIdRepository {
  updateSubscriptionById(params: UpdateAccountSubscriptionById.Params): Promise<UpdateAccountSubscriptionById.Return>;
}
