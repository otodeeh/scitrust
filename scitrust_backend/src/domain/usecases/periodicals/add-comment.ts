
export interface AddComment {
  addComment(params: AddComment.Params): Promise<AddComment.Return>;
}

export namespace AddComment {
  export type Params = {
    periodicalId: number,
    text: string,
    userId: number,
  };
  export type Return = {
    text: string,
    createdAt: Date,
  };
}
