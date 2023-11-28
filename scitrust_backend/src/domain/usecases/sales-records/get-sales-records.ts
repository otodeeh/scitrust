import { SaleRecordModel } from "domain/models";

export interface GetSalesRecords {
  get(params: GetSalesRecords.Params): Promise<GetSalesRecords.Return>;
}

export namespace GetSalesRecords {
  export type Params = {
    distributorId: number
    term: string
    offset: number
    limit: number
  };
  export type Return = {
    salesRecords: SaleRecordModel[]
    hasNextPage: boolean
    total: number
  };
}
