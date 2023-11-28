export interface Validation {
  validate(input: Validation.InputType): Error;
}

export namespace Validation {
  export type InputType = { [key: string]: string | number | Date };
}
