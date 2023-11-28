import { AddTechnicalApproval } from "domain/usecases";

export interface AddTechnicalApprovalRepository {
  addTechnicalApproval(params: AddTechnicalApproval.Params): Promise<AddTechnicalApproval.Return>;
}
