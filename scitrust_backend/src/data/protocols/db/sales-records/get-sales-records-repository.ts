import { GetSalesRecords } from "domain/usecases";

export interface GetSalesRecordsRepository {
  get(params: GetSalesRecords.Params): Promise<GetSalesRecords.Return>;
}
