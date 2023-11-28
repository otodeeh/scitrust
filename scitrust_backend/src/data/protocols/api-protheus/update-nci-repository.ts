import { UpdateNciToProtheus } from "domain/usecases";

export interface UpdateNciRepository {
  request(params: UpdateNciToProtheus.Params): Promise<UpdateNciToProtheus.Return>;
}

