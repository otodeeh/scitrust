import { AddNciToProtheus } from "domain/usecases";

export interface AddNciRepository {
  request(params: AddNciToProtheus.Params): Promise<AddNciToProtheus.Return>;
}

