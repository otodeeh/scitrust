import { AddTechnicalApprovalRepository } from "data/protocols";
import { AddTechnicalApproval } from "domain/usecases";

export class DbAddTechnicalApproval implements AddTechnicalApproval {
  constructor(
    private readonly addTechnicalApprovalRepository: AddTechnicalApprovalRepository,
  ) { }
  async addTechnicalApproval(params: AddTechnicalApproval.Params): Promise<AddTechnicalApproval.Return> {
      const newTechnicalApproval = await this.addTechnicalApprovalRepository.addTechnicalApproval(params);
      return newTechnicalApproval;
  }
}
