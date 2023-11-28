import { AddCommentRepository } from "data/protocols";
import { AddComment } from "domain/usecases";

export class DbAddComment implements AddComment {
  constructor(
    private readonly addCommentRepository: AddCommentRepository,
  ) { }
  async addComment(params: AddComment.Params): Promise<AddComment.Return> {
      const newComment = await this.addCommentRepository.addComment(params);
      return newComment;
  }
}
