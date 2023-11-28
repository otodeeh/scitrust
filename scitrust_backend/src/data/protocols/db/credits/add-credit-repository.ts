import { AddCredit } from "domain/usecases";

export interface AddCreditRepository {
  addCredit(params: AddCredit.Params): Promise<AddCredit.Return>;
}
