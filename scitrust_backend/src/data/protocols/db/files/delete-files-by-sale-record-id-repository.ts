import { DeleteFilesBySaleRecordId } from "domain/usecases";

export interface DeleteFilesBySaleRecordIdRepository {
  delete(params: DeleteFilesBySaleRecordId.Params): Promise<DeleteFilesBySaleRecordId.Return>;
}
