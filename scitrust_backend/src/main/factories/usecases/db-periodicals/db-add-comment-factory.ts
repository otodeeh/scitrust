import { DbAddComment } from "data/usecases";
import { AddComment } from "src/domain/usecases/periodicals/add-comment";
import { EventsPrismaRepository } from "src/infra/db/prisma/events-prisma-repository";

export const makeDbAddCommentFactory = (): AddComment => {
  const eventsPrismaRepository = new EventsPrismaRepository();
  return new DbAddComment(
    eventsPrismaRepository
  );
};
