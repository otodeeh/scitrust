export interface NotifyAccount {
  notify(params: NotifyAccount.Params): Promise<NotifyAccount.Return>;
}

export namespace NotifyAccount {
  export type Params = {
    data: {
      description: string,
      title: string,
      type: string,
      url: string,
    },
    externalId: number,
    report: string,
    subscription: string,
  };
  export type Return = {};
}
