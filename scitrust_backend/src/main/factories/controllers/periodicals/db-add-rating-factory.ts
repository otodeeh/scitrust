import { DbAddRating } from "src/data/usecases/timeline-events/db-add-rating";
import { AddRating } from "src/domain/usecases/periodicals/add-rating";
import { EventsPrismaRepository } from "src/infra/db/prisma/events-prisma-repository";

export const makeDbAddRatingFactory = (): AddRating => {
  const eventsPrismaRepository = new EventsPrismaRepository();
  return new DbAddRating(
    eventsPrismaRepository,
  );
};
