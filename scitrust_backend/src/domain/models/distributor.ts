import { AccountModel } from "./account";
import { EquipmentModel } from "./equipment";

export type DistributorModel = {
  accounts: AccountModel[]
  createdAt: Date
  codeProtheus: string
  deletedAt: Date
  equipments: EquipmentModel[]
  id: number
  name: string
  updatedAt: Date
};