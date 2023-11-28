import { GetDefects } from "domain/usecases";

export interface GetDefectsRepository {
  get(params: GetDefects.Params): Promise<GetDefects.Return>;
}
