import { makeLogControllerDecorator } from "main/factories/decorators/log-controller-decorator-factory";
import { makeDbLoadAccountFactory, makeDbUpdateAccountByIdFactory } from "main/factories/usecases";
import { UpdateAccountByIdController } from "presentation/controllers";
import { Controller } from "presentation/protocols";
import { makeUpdateAccountByIdValidation } from "./update-account-by-id-validation-factory";

export const makeUpdateAccountByIdController = (): Controller => {
  const controller = new UpdateAccountByIdController(
    makeUpdateAccountByIdValidation(),
    makeDbLoadAccountFactory(),
    makeDbUpdateAccountByIdFactory(),
  );
  return makeLogControllerDecorator(controller);
};
