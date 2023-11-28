export type AccountModel = {
  allowNotifications?: boolean
  contact: string
  createdAt: Date
  deletedAt: Date
  distributorId: number
  email: string
  id: number
  language: string
  password: string
  phone: string
  role: string
  subscription?: string
  token: string
  updatedAt: Date
}