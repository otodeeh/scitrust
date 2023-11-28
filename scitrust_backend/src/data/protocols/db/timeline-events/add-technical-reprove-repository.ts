import { AddTechnicalReprove } from "domain/usecases";

export interface AddTechnicalReproveRepository {
  addTechnicalReprove(params: AddTechnicalReprove.Params): Promise<AddTechnicalReprove.Return>;
}
