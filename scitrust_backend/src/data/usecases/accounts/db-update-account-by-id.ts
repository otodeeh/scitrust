import { UpdateAccountByIdRepository } from "data/protocols";
import { UpdateAccountById } from "domain/usecases";

export class DbUpdateAccountById implements UpdateAccountById {
  constructor(
    private readonly updateAccountByIdRepository: UpdateAccountByIdRepository,
  ) { }
  async updateById(params: UpdateAccountById.Params): Promise<UpdateAccountById.Return> {
      const updatedAccount = await this.updateAccountByIdRepository.updateById(params);
      return updatedAccount;
  }
}
