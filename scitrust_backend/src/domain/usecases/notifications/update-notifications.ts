
export interface UpdateNotifications {
  update(params: UpdateNotifications.Params): Promise<UpdateNotifications.Return>;
}

export namespace UpdateNotifications {
  export type Params = {
    notifications: {
      id: number;
      status: string;
    }[]
  };
  export type Return = { updatedNotifications: number };
};
