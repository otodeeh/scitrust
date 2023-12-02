import { Validation } from "presentation/protocols";
import {
  RequiredFieldValidation,
  ValidationComposite
} from "validation/validators";

export const makeAddRatingValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  const fields = [
    "value",
    "periodicalId",
  ]
  for (const field of fields) {
    validations.push(new RequiredFieldValidation(field));
  }
  return new ValidationComposite(validations);
};
