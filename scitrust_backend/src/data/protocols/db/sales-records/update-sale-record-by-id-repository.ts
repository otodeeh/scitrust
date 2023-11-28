import { UpdateSaleRecordById } from "domain/usecases";

export interface UpdateSaleRecordByIdRepository {
  update(params: UpdateSaleRecordById.Params): Promise<UpdateSaleRecordById.Return>;
}
