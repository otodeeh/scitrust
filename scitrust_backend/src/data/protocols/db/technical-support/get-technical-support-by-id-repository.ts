import { GetTechnicalSupportById } from "domain/usecases";

export interface GetTechnicalSupportByIdRepository {
  getById(params: GetTechnicalSupportById.Params): Promise<GetTechnicalSupportById.Return>;
}
