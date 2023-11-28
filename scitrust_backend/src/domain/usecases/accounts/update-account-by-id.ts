import { AccountModel } from "src/domain/models";

export interface UpdateAccountById {
  updateById(params: UpdateAccountById.Params): Promise<UpdateAccountById.Return>;
}

export namespace UpdateAccountById {
  export type Params = {
    id: number
    contact: string
    deletedAt?: Date
    email: string
    language: string
    phone: string
    token: string
    role?: string
  };
  export type Return = Omit<AccountModel, "createdAt" | "deletedAt" | "deletedAt" | "distributorId" | "password" | "updatedAt">
}
