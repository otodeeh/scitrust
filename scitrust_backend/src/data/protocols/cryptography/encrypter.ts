export interface Encrypter {
  encrypt(value: number | string): Promise<string>;
}
