import { GetSalesRecordsRepository } from "data/protocols";
import { GetSalesRecords } from "domain/usecases";

export class DbGetSalesRecords implements GetSalesRecords {
  constructor(
    private readonly getSalesRecordsRepository: GetSalesRecordsRepository,
  ) { }
  async get(params: GetSalesRecords.Params): Promise<GetSalesRecords.Return> {
      const saleRecords = await this.getSalesRecordsRepository.get(params);
      return saleRecords;
  }
}
