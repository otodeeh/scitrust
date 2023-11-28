import { DbUpdateAccountById } from "data/usecases";
import { UpdateAccountById } from "domain/usecases";
import { AccountPrismaRepository } from "src/infra/db/prisma";

export const makeDbUpdateAccountByIdFactory = (): UpdateAccountById => {
  const accountPrismaRepository = new AccountPrismaRepository();
  return new DbUpdateAccountById(
    accountPrismaRepository
  );
};
