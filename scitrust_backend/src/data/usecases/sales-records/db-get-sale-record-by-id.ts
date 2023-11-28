import { GetSaleRecordByIdRepository } from "data/protocols";
import { GetSaleRecordById } from "domain/usecases";

export class DbGetSaleRecordById implements GetSaleRecordById {
  constructor(
    private readonly getSaleRecordByIdRepository: GetSaleRecordByIdRepository,
  ) { }
  async getById(params: GetSaleRecordById.Params): Promise<GetSaleRecordById.Return> {
      const saleRecord = await this.getSaleRecordByIdRepository.getById(params);
      return saleRecord;
  }
}
