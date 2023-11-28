import { GetTechnicalSupportList } from "domain/usecases";

export interface GetTechnicalSupportListRepository {
  getList(params: GetTechnicalSupportList.Params): Promise<GetTechnicalSupportList.Return>;
}
