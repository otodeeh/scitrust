
export interface GetNotifications {
  getList(params: GetNotifications.Params): Promise<GetNotifications.Return>;
}

export namespace GetNotifications {
  export type Params = {
    accountId: number
    term: string
    offset: number
    limit: number
    status: string
    notify?: boolean
    account?: boolean
  };
  export type Return = {
    notifications: {
      account: {
        contact: string,
        email: string,
        id: number,
        language: string,
        subscription: string,
        token: string,
      },
      createdAt: Date,
      data: string,
      deletedAt: Date,
      id: number,
      readAt: Date,
      status: string,
      type: string,
      updatedAt: Date,
    }[],
    hasNextPage: boolean
    total: number
  };
}
