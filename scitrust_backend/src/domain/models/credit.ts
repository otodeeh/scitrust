export type CreditModel = {
  id: number
  approvalId: number
  balance: number
  createdAt: Date
  dueAt: Date
  erpSync: boolean
  nature: string
  observation: string
  ptax: number
  value: number
};
