import { UpdateSaleRecordByIdRepository } from "data/protocols";
import { UpdateSaleRecordById } from "domain/usecases";

export class DbUpdateSaleRecordById implements UpdateSaleRecordById {
  constructor(
    private readonly updateSaleRecordByIdRepository: UpdateSaleRecordByIdRepository,
  ) { }
  async update(params: UpdateSaleRecordById.Params): Promise<UpdateSaleRecordById.Return> {
      const updatedSaleRecord = await this.updateSaleRecordByIdRepository.update(params);
      return updatedSaleRecord;
  }
}
