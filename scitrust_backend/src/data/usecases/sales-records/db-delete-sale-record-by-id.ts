import { DeleteSaleRecordByIdRepository } from "data/protocols";
import { DeleteSaleRecordById } from "domain/usecases";

export class DbDeleteSaleRecordById implements DeleteSaleRecordById {
  constructor(
    private readonly deleteSaleRecordByIdRepository: DeleteSaleRecordByIdRepository,
  ) { }
  async delete(params: DeleteSaleRecordById.Params): Promise<DeleteSaleRecordById.Return> {
      const deletedSaleRecord = await this.deleteSaleRecordByIdRepository.delete(params);
      return deletedSaleRecord;
  }
}
