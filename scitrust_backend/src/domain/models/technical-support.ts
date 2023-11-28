import { ApprovalModel, EquipmentModel, EventModel, FileModel, ReplacedPartModel, TechnicianModel } from "../models";
import { DefectModel } from "./defect";

export type TechnicalSupportModel = {
  createdAt: Date
  approvals: ApprovalModel[]
  id: number
  clientReport: string
  defect: DefectModel
  equipment: EquipmentModel
  events: EventModel[]
  files: FileModel[]
  replacedParts: ReplacedPartModel[]
  status?: string
  servicePerformed: string
  technician: TechnicianModel
  updatedAt: Date
};
