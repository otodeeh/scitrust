import { FileModel } from "domain/models";

export interface DeleteFilesBySaleRecordId {
  delete(params: DeleteFilesBySaleRecordId.Params): Promise<DeleteFilesBySaleRecordId.Return>;
}

export namespace DeleteFilesBySaleRecordId {
  export type Params = { saleRecordId: number };
  export type Return = FileModel[];
}
