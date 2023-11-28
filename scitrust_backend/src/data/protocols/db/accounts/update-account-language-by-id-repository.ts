import { UpdateAccountLanguageById } from "domain/usecases";

export interface UpdateAccountLanguageByIdRepository {
  updateLanguageById(params: UpdateAccountLanguageById.Params): Promise<UpdateAccountLanguageById.Return>;
}
