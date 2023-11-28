import { Validation } from "presentation/protocols";
import {
  CompareFieldsValidation,
  RequiredFieldValidation,
  ValidationComposite,
} from "validation/validators";

export const makeRecoverAccountPasswordValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of ["token", "password", "passwordConfirmation"]) {
    validations.push(new RequiredFieldValidation(field));
  }
  validations.push(
    new CompareFieldsValidation("password", "passwordConfirmation")
  );
  return new ValidationComposite(validations);
};
