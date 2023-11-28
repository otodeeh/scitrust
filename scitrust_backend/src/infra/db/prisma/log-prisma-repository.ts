import { LogErrorRepository } from "data/protocols";
import { Prisma } from "./prisma-helper";

export class LogPrismaRepository implements LogErrorRepository {
  async logError(stack: string): Promise<void> {
    await Prisma.errorLogs.create({
      data: { stack: stack, createdAt: new Date() },
    });
  }
}
