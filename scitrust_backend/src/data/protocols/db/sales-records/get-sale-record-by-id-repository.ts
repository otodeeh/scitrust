import { GetSaleRecordById } from "domain/usecases";

export interface GetSaleRecordByIdRepository {
  getById(params: GetSaleRecordById.Params): Promise<GetSaleRecordById.Return>;
}
