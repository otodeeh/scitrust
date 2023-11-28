import { EquipmentModel, SaleRecordModel } from "domain/models";
import { FileModel } from "domain/models/file";

export interface AddSaleRecord {
  add(params: AddSaleRecord.Params): Promise<AddSaleRecord.Return>;
}

export namespace AddSaleRecord {
  export type Params = {
    client: {
      city: string
      name: string
      countryId: number
      email: string
      id?: number
      phone: string
      type: string
    }
    distributorId: number
    distributorOrder: string
    equipments: Pick<EquipmentModel, "id" | "installationDate">[]
    files: Pick<FileModel, "description" | "extension" | "url">[]
    observation: string
    saleDate: Date
  };
  export type Return = Pick<SaleRecordModel, "id">;
}
