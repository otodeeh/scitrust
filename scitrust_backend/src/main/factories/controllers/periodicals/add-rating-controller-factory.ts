import { makeLogControllerDecorator } from "main/factories/decorators/log-controller-decorator-factory";
import { makeDbLoadAccountFactory } from "main/factories/usecases";
import { Controller } from "presentation/protocols";
import { AddRatingController } from "src/presentation/controllers/timeline-events/add-rating-controller";
import { makeAddRatingValidation } from "./add-rating-validation-factory";
import { makeDbAddRatingFactory } from "./db-add-rating-factory";

export const makeAddRatingController = (): Controller => {
  const controller = new AddRatingController(
    makeAddRatingValidation(),
    makeDbLoadAccountFactory(),
    makeDbAddRatingFactory()
  );
  return makeLogControllerDecorator(controller);
};
