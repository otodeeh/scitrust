import { AddSaleRecordRepository } from "data/protocols";
import { AddSaleRecord } from "domain/usecases";

export class DbAddSaleRecord implements AddSaleRecord {
  constructor(
    private readonly addSaleRecordRepository: AddSaleRecordRepository,
  ) { }
  async add(params: AddSaleRecord.Params): Promise<AddSaleRecord.Return> {
      const newSaleRecord = await this.addSaleRecordRepository.add(params);
      return newSaleRecord;
  }
}
