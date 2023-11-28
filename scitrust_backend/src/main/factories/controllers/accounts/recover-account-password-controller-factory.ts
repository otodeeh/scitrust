import { makeLogControllerDecorator } from "main/factories/decorators/log-controller-decorator-factory";
import {
  makeDbAuthenticationFactory,
  makeDbRecoverAccountPasswordFactory,
} from "main/factories/usecases";
import { RecoverAccountPasswordController } from "presentation/controllers";
import { Controller } from "presentation/protocols";
import { makeRecoverAccountPasswordValidation } from "./recover-account-password-validation-factory";

export const makeRecoverAccountPasswordController = (): Controller => {
  const controller = new RecoverAccountPasswordController(
    makeRecoverAccountPasswordValidation(),
    makeDbRecoverAccountPasswordFactory(),
    makeDbAuthenticationFactory()
  );
  return makeLogControllerDecorator(controller);
};
