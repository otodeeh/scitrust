import { AddComment } from "domain/usecases";

export interface AddCommentRepository {
  addComment(params: AddComment.Params): Promise<AddComment.Return>;
}
