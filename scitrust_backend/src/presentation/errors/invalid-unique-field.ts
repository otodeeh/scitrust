export class InvalidUniqueField extends Error {
  constructor(fieldName: string) {
    super(
      `The value provided for the field ${fieldName} already exists in our system. Please enter a unique value for this field.`
    );
    this.name = "InvalidUniqueField";
  }
}
