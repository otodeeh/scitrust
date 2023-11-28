import { InvalidParamError, MissingParamError } from "presentation/errors";
import { Validation } from "presentation/protocols";

export class OptionalFieldValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly fieldNameList: Array<string>
  ) {}

  validate(input: Validation.InputType): Error {
    const inputKeys = Object.keys(input);
    for (let key of inputKeys) {
      if (!this.fieldNameList.includes(key)) return new InvalidParamError(key);
    }
    if (this.fieldName in input)
      if (!input[this.fieldName]) return new MissingParamError(this.fieldName);

    return null;
  }
}
