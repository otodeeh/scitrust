export interface GetDistributorToScheduleTask {
  get(): Promise<GetDistributorToScheduleTask.Return>;
}

export namespace GetDistributorToScheduleTask {
  export type Return = {
    codeProtheus: string;
    equipments: {
      serialNumber: string
    }[]
  }[];
}
