import { Validation } from "presentation/protocols";
import {
  RequiredFieldValidation,
  ValidationComposite
} from "validation/validators";

export const makeUpdateAccountByIdValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  const fields = [
    "contact",
    "email",
    "language",
    "phone"
  ]
  for (const field of fields) {
    validations.push(new RequiredFieldValidation(field));
  }
  return new ValidationComposite(validations);
};
