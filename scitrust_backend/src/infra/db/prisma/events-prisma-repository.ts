import { Prisma } from "infra/db/prisma";
import { AddComment } from "src/domain/usecases/periodicals/add-comment";
import { AddRating } from "src/domain/usecases/periodicals/add-rating";

export class EventsPrismaRepository {
  async addComment(params: AddComment.Params): Promise<AddComment.Return> {
      const { text, userId, periodicalId } = params

      const comments = await Prisma.comments.create({
        data: {
          text,
          userId,
          periodicalId
        }
      })

      return comments
  }
  async addRating(params: AddRating.Params): Promise<AddRating.Return> {
      const { value, userId, periodicalId } = params

      const rating = await Prisma.rating.create({
        data: {
          value,
          userId,
          periodicalId
        }
      })

      return rating
  }

}
