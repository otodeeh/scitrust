import { AddTechnicalSupport } from "domain/usecases";

export interface AddTechnicalSupportRepository {
  add(params: AddTechnicalSupport.Params): Promise<AddTechnicalSupport.Return>;
}
