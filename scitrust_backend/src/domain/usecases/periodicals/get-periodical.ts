
export interface GetPeriodical {
  get(params: GetPeriodical.Params): Promise<GetPeriodical.Return>;
}

export namespace GetPeriodical {
  export type Params = {
    term: string
    offset: number
    limit: number
  };
  export type Return = {
    periodicals: {
      issn: string,
      title: string,
      id: number,
      description: string,
      stratum: string,
    }[]
    hasNextPage: boolean
    total: number
  };
}
