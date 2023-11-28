import { AddSaleRecord } from "domain/usecases";

export interface AddSaleRecordRepository {
  add(params: AddSaleRecord.Params): Promise<AddSaleRecord.Return>;
}
