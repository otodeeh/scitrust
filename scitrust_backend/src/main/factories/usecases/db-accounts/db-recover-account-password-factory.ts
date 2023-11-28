import { DbRecoverAccountPassword } from "data/usecases";
import { RecoverAccountPassword } from "domain/usecases";
import { BcryptAdapter } from "infra/criptography/encrypt-adapter";
import { AccountPrismaRepository } from "infra/db/prisma";

export const makeDbRecoverAccountPasswordFactory = (): RecoverAccountPassword => {
  const salt = 12;
  const bcryptAdapter = new BcryptAdapter(salt);
  const accountPrismaRepository = new AccountPrismaRepository();
  return new DbRecoverAccountPassword(
    accountPrismaRepository,
    bcryptAdapter,
    bcryptAdapter,
    accountPrismaRepository
  );
};
