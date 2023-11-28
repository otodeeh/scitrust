import { DeleteSaleRecordById } from "domain/usecases";

export interface DeleteSaleRecordByIdRepository {
  delete(params: DeleteSaleRecordById.Params): Promise<DeleteSaleRecordById.Return>;
}
