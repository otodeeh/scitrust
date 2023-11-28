import { UpdateAccountLanguageByIdRepository } from "data/protocols";
import { UpdateAccountLanguageById } from "domain/usecases";

export class DbUpdateAccountLanguageById implements UpdateAccountLanguageById {
  constructor(
    private readonly updateAccountLanguageByIdRepository: UpdateAccountLanguageByIdRepository,
  ) { }
  async updateLanguageById(params: UpdateAccountLanguageById.Params): Promise<UpdateAccountLanguageById.Return> {
      const updatedAccount = await this.updateAccountLanguageByIdRepository.updateLanguageById(params);
      return updatedAccount;
  }
}
