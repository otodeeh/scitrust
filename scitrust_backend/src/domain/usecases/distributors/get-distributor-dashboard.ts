
export interface GetDistributorDashboard {
  getDashboard(params: GetDistributorDashboard.Params): Promise<GetDistributorDashboard.Return>;
}

export namespace GetDistributorDashboard {
  export type Params = {
    distributorId: number;
    equipmentParams: {
      equipmentEndDate: Date;
      equipmentLimit: number;
      equipmentStartDate: Date;
    }
    partParams: {
      partEndDate: Date;
      partLimit: number;
      partStartDate: Date;
    }
  }
  export type Return = {
    credits: { consumed: number, open: number }
    equipments: { amount: number; code: string; description: string }[];
    requestedParts: { amount: number; code: string; descriptionEn: string; descriptionEs: string; descriptionPt: string }[];
    sales: { lastQuarterAmountRecorded: number, penultimateQuarterAmountRecorded: number }
    technicalSupport: { approvedValue: number, lastQuarterAmountRecorded: number, penultimateQuarterAmountRecorded: number, requestedValue: number }
  };
}
