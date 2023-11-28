export interface SendMailRecoverAccountPassword {
  send(params: SendMailRecoverAccountPassword.Params): Promise<SendMailRecoverAccountPassword.Return>;
}

export namespace SendMailRecoverAccountPassword {
  export type Params = { email: string };
  export type Return = { messageId: string };
}