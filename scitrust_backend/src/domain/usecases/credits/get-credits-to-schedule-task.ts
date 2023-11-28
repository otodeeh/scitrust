
export interface GetCreditsToScheduleTask {
  getCredits(): Promise<GetCreditsToScheduleTask.Return>;
}

export namespace GetCreditsToScheduleTask {
  export type Return = ({
    approval: {
      technicalSupport: {
        id: number;
        equipment: {
          distributor: {
            codeProtheus: string;
          };
        };
      };
      _count: {
        credits: number;
      };
    };
  } & {
    id: number;
    approvalId: number;
    balance: number;
    createdAt: Date;
    dueAt: Date;
    erpSync: boolean;
    nature: string;
    observation: string;
    ptax: number;
    value: number;
  })[]
}