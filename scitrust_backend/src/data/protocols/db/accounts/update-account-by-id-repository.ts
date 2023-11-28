import { UpdateAccountById } from "domain/usecases";

export interface UpdateAccountByIdRepository {
  updateById(params: UpdateAccountById.Params): Promise<UpdateAccountById.Return>;
}
