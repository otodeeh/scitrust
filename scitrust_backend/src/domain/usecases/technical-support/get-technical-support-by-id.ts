
export interface GetTechnicalSupportById {
  getById(params: GetTechnicalSupportById.Params): Promise<GetTechnicalSupportById.Return>;
}

export namespace GetTechnicalSupportById {
  export type Params = { id: number };
  export type Return = {
    approvals: {
      approvedParts: {
        id: number,
        amount: number,
        historicalValue: number,
        part: {
          code: string,
          descriptionEn: string,
          descriptionEs: string,
          descriptionPt: string,
          id: number,
          value: number,
        },
        createdAt: Date,
        updatedAt: Date
      }[],
      createdAt: Date,
      type: string,
      updatedAt: Date,
      id: number
    }[],
    clientReport: string,
    createdAt: Date,
    defect: {
      descriptionEn: string,
      descriptionEs: string,
      descriptionPt: string,
      classification: string,
      id: number
    },
    deletedAt: Date,
    equipment: {
      acquisitionDate: Date,
      code: string,
      description: string,
      distributor: {
        codeProtheus: string,
        id: number,
        name: string,
      },
      id: number,
      installationDate: Date,
      observation: string,
      salesRecord: {
        client: {
          city: string,
          country: {
            code: string,
            id: number,
            name: string
          },
          email: string,
          id: number,
          name: string,
          phone: string,
          type: string
        },
        distributorOrder: string,
        id: number,
        observation: string,
        saleDate: Date,
      },
      serialNumber: string
    },
    events: {
      account: {
        contact: string,
        id: number
      },
      createdAt: Date,
      files: {
        createdAt: Date,
        description: string,
        extension: string,
        id: number,
        url: string
      }[],
      id: number,
      text: string,
      type: string
    }[],
    files: {
      createdAt: Date,
      description: string,
      extension: string,
      id: number,
      url: string
    }[],
    id: number,
    replacedParts: {
      amount: number,
      createdAt: Date,
      historicalValue: number,
      id: number,
      part: {
        code: string,
        descriptionEn: string,
        descriptionEs: string,
        descriptionPt: string,
        id: number,
        value: number,
      },
      reportedDefect: string,
      updatedAt: Date,
    }[],
    servicePerformed: string,
    technician: {
      contact: string,
      email: string,
      id: number,
      phone: string
    },
    updatedAt: Date
  }
}
