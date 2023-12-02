import { AddCommentRepository } from "src/data/protocols/db/periodicals/add-comment-repository";
import { AddComment } from "src/domain/usecases/periodicals/add-comment";

export class DbAddComment implements AddComment {
  constructor(
    private readonly addCommentRepository: AddCommentRepository,
  ) { }
  async addComment(params: AddComment.Params): Promise<AddComment.Return> {
      const newComment = await this.addCommentRepository.addComment(params);
      return newComment;
  }
}
