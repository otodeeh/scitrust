import { GetPeriodical } from "domain/usecases";
import { DbGetPeriodicals } from "src/data/usecases/periodicals/db-get-periodicals";
import { PeriodicalPrismaRepository } from "src/infra/db/prisma/periodical-prisma-repository";

export const makeDbGetPeriodicalsFactory = (): GetPeriodical => {
  const periodicalsPrismaRepository = new PeriodicalPrismaRepository();
  return new DbGetPeriodicals(
    periodicalsPrismaRepository
  );
};
