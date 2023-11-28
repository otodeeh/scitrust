export class InvalidBodyError extends Error {
  constructor() {
    super("Request with empty or undefined body");
    this.name = "InvalidBodyError";
  }
}
