import { AccountModel } from "src/domain/models";

export interface UpdateAccountLanguageById {
  updateLanguageById(params: UpdateAccountLanguageById.Params): Promise<UpdateAccountLanguageById.Return>;
}

export namespace UpdateAccountLanguageById {
  export type Params = {
    id: number
    language: string
  };
  export type Return = Pick<AccountModel, "id" | "language">
}
