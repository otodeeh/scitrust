import { ClientModel, FileModel, ReplacedPartModel, TechnicianModel } from "domain/models";

export interface AddTechnicalSupport {
  add(params: AddTechnicalSupport.Params): Promise<AddTechnicalSupport.Return>;
}

export namespace AddTechnicalSupport {
  export type Params = {
    accountId: number,
    client: Omit<ClientModel, "createdAt" | "updatedAt">
    technicalSupports: {
      clientReport: string;
      defectId: number;
      equipmentId: number;
      files: Pick<FileModel, "description" | "extension" | "url">[]
      replacedParts: Pick<ReplacedPartModel, "amount" | "historicalValue" | "partId" | "reportedDefect">[]
      servicePerformed: string;
      technician: Pick<TechnicianModel, "contact" | "email" | "phone">
    }[]
  };
  export type Return = { id: number }[];
}
