import { AddDistributor } from "domain/usecases";

export interface AddDistributorRepository {
  add(params: AddDistributor.Params): Promise<AddDistributor.Return>;
}
