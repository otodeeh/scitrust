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

  async getRating(params: AddComment.Params): Promise<AddComment.Return> {
    const { text, userId, periodicalId } = params

    const where = {
      userId: userId,
      periodicalId: periodicalId
    }

    const rating = await Prisma.comments.findFirst({ where })

    return rating
  }

  async addRating(params: AddRating.Params): Promise<AddRating.Return> {
    const { value, userId, periodicalId } = params

    const where = {
      userId: userId,
      periodicalId: periodicalId
    }

    const ratingExists = await Prisma.rating.findFirst({
      where
    })

    if (!ratingExists) {
      const rating = await Prisma.rating.create({
        data: {
          value,
          userId,
          periodicalId
        }
      })

      return rating
    }

    const rating = await Prisma.rating.update({
      where: { id: ratingExists?.id },
      data: {
        value
      }
    })

    return rating
  }

}
