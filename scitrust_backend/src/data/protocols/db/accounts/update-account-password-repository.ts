export interface UpdateAccountPasswordRepository {
  updatePassword(id: number, password: string): Promise<void>;
}
