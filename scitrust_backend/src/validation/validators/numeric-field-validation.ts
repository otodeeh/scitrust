import { InvalidParamError } from "presentation/errors";
import { Validation } from "presentation/protocols";

export class NumericFieldValidation implements Validation {
  private readonly fieldName: string;

  constructor(fieldName: string) {
    this.fieldName = fieldName;
  }
  validate(input: Validation.InputType): Error {
    if (isNaN(+input[this.fieldName])) {
      return new InvalidParamError(this.fieldName);
    }
  }
}
