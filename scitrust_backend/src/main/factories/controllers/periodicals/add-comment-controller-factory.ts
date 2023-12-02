import { makeLogControllerDecorator } from "main/factories/decorators/log-controller-decorator-factory";
import { makeDbLoadAccountFactory } from "main/factories/usecases";
import { AddCommentController } from "presentation/controllers";
import { Controller } from "presentation/protocols";
import { makeAddCommentValidation } from "./add-comment-validation-factory";
import { makeDbAddCommentFactory } from "./db-add-comment-factory";

export const makeAddCommentController = (): Controller => {
  const controller = new AddCommentController(
    makeAddCommentValidation(),
    makeDbLoadAccountFactory(),
    makeDbAddCommentFactory()
  );
  return makeLogControllerDecorator(controller);
};
