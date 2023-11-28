import { ClientModel, EquipmentModel, SaleRecordModel } from "domain/models";
import { FileModel } from "domain/models/file";

export interface UpdateSaleRecordById {
  update(params: UpdateSaleRecordById.Params): Promise<UpdateSaleRecordById.Return>;
}

export namespace UpdateSaleRecordById {
  export type Params = {
    id: number
    client: Omit<ClientModel, "id" | "createdAt" | "updatedAt">
    distributorOrder: string
    equipments: Pick<EquipmentModel, "id" | "installationDate">[]
    files: Pick<FileModel, "description" | "extension" | "url">[]
    observation: string
  };
  export type Return = Pick<SaleRecordModel, "id">;
}
