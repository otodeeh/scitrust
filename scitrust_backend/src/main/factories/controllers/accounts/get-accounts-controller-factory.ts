import { makeLogControllerDecorator } from "main/factories/decorators/log-controller-decorator-factory";
import { makeDbGetAccountsFactory } from "main/factories/usecases";
import { GetAccountsController } from "presentation/controllers";
import { Controller } from "presentation/protocols";

export const makeGetAccountsController = (): Controller => {
  const controller = new GetAccountsController(
    makeDbGetAccountsFactory(),
  );
  return makeLogControllerDecorator(controller);
};
