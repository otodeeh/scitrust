export interface UpdateAccountAccessTokenRepository {
  updateAccessToken(id: number, token: string): Promise<void>;
}
