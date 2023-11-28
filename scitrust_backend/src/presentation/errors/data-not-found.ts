export class DataNotFoundError extends Error {
  constructor(paramName: string) {
    super(`Data not found with value provided on ${paramName}`);
    this.name = "DataNotFoundError";
  }
}
