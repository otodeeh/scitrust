import { makeLogControllerDecorator } from "main/factories/decorators/log-controller-decorator-factory";
import { Controller } from "presentation/protocols";
import { GetPeriodicalsController } from "src/presentation/controllers/periodicals/get-accounts-controller";
import { makeDbGetPeriodicalsFactory } from "../../usecases/db-periodicals/db-get-accounts-factory";

export const makeGetPeriodicalsController = (): Controller => {
  const controller = new GetPeriodicalsController(
    makeDbGetPeriodicalsFactory(),
  );
  return makeLogControllerDecorator(controller);
};
