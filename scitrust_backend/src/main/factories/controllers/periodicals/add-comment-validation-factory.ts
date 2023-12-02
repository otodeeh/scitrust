import { Validation } from "presentation/protocols";
import {
  RequiredFieldValidation,
  ValidationComposite
} from "validation/validators";

export const makeAddCommentValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  const fields = [
    "text",
    "periodicalId",
  ]
  for (const field of fields) {
    validations.push(new RequiredFieldValidation(field));
  }
  return new ValidationComposite(validations);
};
