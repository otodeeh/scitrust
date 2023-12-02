import { AddComment } from "src/domain/usecases/periodicals/add-comment";

export interface AddCommentRepository {
  addComment(params: AddComment.Params): Promise<AddComment.Return>;
}
