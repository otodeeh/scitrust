import { GetParts } from "domain/usecases";

export interface GetPartsRepository {
  get(params: GetParts.Params): Promise<GetParts.Return>;
}
