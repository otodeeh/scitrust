import { DbLoadAccountByEmail } from "data/usecases";
import { LoadAccountByEmail } from "domain/usecases";
import { AccountPrismaRepository } from "infra/db/prisma";

export const makeDbLoadAccountByEmailFactory = (): LoadAccountByEmail => {
  const accountPrismaRepository = new AccountPrismaRepository();
  return new DbLoadAccountByEmail(accountPrismaRepository);
};
