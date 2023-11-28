import { DeleteFilesBySaleRecordIdRepository } from "data/protocols";
import { DeleteFilesBySaleRecordId } from "domain/usecases";

export class DbDeleteFilesBySaleRecordId implements DeleteFilesBySaleRecordId {
  constructor(
    private readonly deleteFilesBySaleRecordIdRepository: DeleteFilesBySaleRecordIdRepository,
  ) { }
  async delete(params: DeleteFilesBySaleRecordId.Params): Promise<DeleteFilesBySaleRecordId.Return> {
      const equipments = await this.deleteFilesBySaleRecordIdRepository.delete(params);
      return equipments;
  }
}
