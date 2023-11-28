import { DbGetAccounts } from "data/usecases";
import { GetAccounts } from "domain/usecases";
import { AccountPrismaRepository } from "infra/db/prisma";

export const makeDbGetAccountsFactory = (): GetAccounts => {
  const accountsPrismaRepository = new AccountPrismaRepository();
  return new DbGetAccounts(
    accountsPrismaRepository
  );
};
