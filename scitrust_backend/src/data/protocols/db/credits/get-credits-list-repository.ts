import { GetCreditsList } from "domain/usecases";

export interface GetCreditsListRepository {
  getList(params: GetCreditsList.Params): Promise<GetCreditsList.Return>;
}
