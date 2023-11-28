
export interface SenderMail {
  send(params: SenderMail.Params): Promise<SenderMail.Return>;
}

export namespace SenderMail {
  export type Params = {
    from: string
    to: string
    subject: string
    text?: string
    html?: string
  }
  export type Return = { messageId: string };
}