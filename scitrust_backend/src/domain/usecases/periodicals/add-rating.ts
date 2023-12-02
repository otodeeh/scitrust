
export interface AddRating {
  addRating(params: AddRating.Params): Promise<AddRating.Return>;
}

export namespace AddRating {
  export type Params = {
    periodicalId: number,
    value: number,
    userId: number,
  };
  export type Return = {
    value: number,
    createdAt: Date,
  };
}
