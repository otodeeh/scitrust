import { Validation } from "presentation/protocols";
import {
  RequiredFieldValidation,
  ValidationComposite,
} from "validation/validators";

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of ["email", "password"]) {
    validations.push(new RequiredFieldValidation(field));
  }
  return new ValidationComposite(validations);
};
