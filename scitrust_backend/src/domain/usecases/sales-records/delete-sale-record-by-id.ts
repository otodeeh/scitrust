import { SaleRecordModel } from "domain/models";

export interface DeleteSaleRecordById {
  delete(params: DeleteSaleRecordById.Params): Promise<DeleteSaleRecordById.Return>;
}

export namespace DeleteSaleRecordById {
  export type Params = { id: number };
  export type Return = Pick<SaleRecordModel, "id">;
}
