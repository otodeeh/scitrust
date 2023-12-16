import { Prisma } from "infra/db/prisma";
import { GetPeriodical } from "src/domain/usecases/periodicals/get-periodical";

export class PeriodicalPrismaRepository {
  async get(params: GetPeriodical.Params): Promise<any> {
    const { offset, limit, term } = params

    const select = {
      id: true,
      issn: true,
      title: true,
      description: true,
      createdAt: true,
      comments: {
        select: {
          id: true,
          text: true,
          createdAt: true,
          user: {
            select: {
              name: true
            }
          }
        }
      },
      ratings: {
        select: {
          id: true,
          value: true
        }
      }
    }

    const where = {
      AND: {
        OR: [
          {
            title: {
              contains: term,
            },
          },
          {
            issn: {
              contains: term,
            }
          }
        ]
      }
    }

    const [total, periodicals] = await Promise.all([
      Prisma.periodical.count({ where }),
      Prisma.periodical.findMany({
        skip: offset * limit,
        take: limit,
        where,
        select
      })
    ]);

    const hasNextPage = (offset) + limit < total;
    return { periodicals, hasNextPage, total };
  }
}
