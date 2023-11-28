import { LogControllerDecorator } from "main/decorators/log-controller-decorator";
import { Controller } from "presentation/protocols";
import { LogPrismaRepository } from "src/infra/db/prisma/log-prisma-repository";

export const makeLogControllerDecorator = (
  controller: Controller
): Controller => {
  const logPrismaRepository = new LogPrismaRepository();
  return new LogControllerDecorator(controller, logPrismaRepository);
};
