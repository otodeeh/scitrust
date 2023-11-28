import { EventModel, FileModel } from "domain/models";

export interface AddComment {
  addComment(params: AddComment.Params): Promise<AddComment.Return>;
}

export namespace AddComment {
  export type Params = {
    accountId: number,
    comment: string,
    files: Pick<FileModel, "description" | "extension" | "url">[]
    technicalSupportId: number,
    financialNotify: boolean
  };
  export type Return = EventModel;
}
