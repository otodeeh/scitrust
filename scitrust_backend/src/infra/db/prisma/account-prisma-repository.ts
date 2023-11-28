import {
  AddAccountRepository,
  GetAccountsRepository,
  LoadAccountByEmailRepository,
  LoadAccountByTokenRepository,
  UpdateAccountAccessTokenRepository,
  UpdateAccountByIdRepository,
  UpdateAccountPasswordRepository
} from "data/protocols";
import { AddAccount, GetAccounts, LoadAccountByEmail, UpdateAccountById, UpdateAccountLanguageById } from "domain/usecases";
import { Prisma } from "infra/db/prisma";

export class AccountPrismaRepository
  implements
  AddAccountRepository,
  GetAccountsRepository,
  LoadAccountByEmailRepository,
  LoadAccountByTokenRepository,
  UpdateAccountAccessTokenRepository,
  UpdateAccountByIdRepository,
  UpdateAccountPasswordRepository {
  async add(params: any): Promise<AddAccount.Return> {
    const account = await Prisma.user.create({
      data: params,
    });
    return account;
  }

  async load(params: LoadAccountByEmail.Params): Promise<any> {
    const account = await Prisma.user.findFirst({
      where: params
    });
    return account;
  }

  async loadByToken(params: any): Promise<any> {
    const { token } = params
    const where = {
      token
    }

    const account = await Prisma.user.findFirst({ where });

    return account;
  }

  async updateAccessToken(id: number, token: string): Promise<void> {
    await Prisma.user.update({
      where: { id },
      data: { token },
    });
  }

  async updatePassword(id: number, password: string): Promise<void> {
    await Prisma.user.update({
      where: { id },
      data: { password },
    });
  }

  async updateById(params: UpdateAccountById.Params): Promise<any> {
    const { id, ...rest } = params;

    const updatedAccount = await Prisma.user.update({
      where: { id: params.id },
      data: rest,
    });

    const { name, email, token } = updatedAccount
    return { id, email, token };
  }

  async updateLanguageById(params: UpdateAccountLanguageById.Params): Promise<any> {
    const { id, ...rest } = params;

    const updatedAccount = await Prisma.user.update({
      where: { id: params.id },
      data: rest,
    });

    return { id };
  }

  async get(params: GetAccounts.Params): Promise<any> {
    const { offset, limit, term } = params

    const where = {
      AND: {
        deletedAt: null,
        OR: [
          {
            email: {
              contains: term
            },
          },
          {
            name: {
              contains: term
            }
          },
        ]
      }
    }

    const [total, user] = await Promise.all([
      Prisma.user.count({ where }),
      Prisma.user.findMany({
        skip: offset * limit,
        take: limit,
        where,
        select: {
          name: true,
          email: true,
          id: true,
        }
      })
    ]);

    const hasNextPage = (offset) + limit < total;
    return { user, hasNextPage, total };
  }
}
