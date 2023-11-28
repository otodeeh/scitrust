import { Encrypter, LoadAccountByEmailRepository, SenderMail, UpdateAccountAccessTokenRepository } from "data/protocols";
import {
  SendMailRecoverAccountPassword,
} from "domain/usecases";
import { recoverAccountPasswordTemplate } from "utils/email-templates/recover-account-password";

export class DbSendMailRecoverAccountPassword implements SendMailRecoverAccountPassword {
  constructor(
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    private readonly encrypter: Encrypter,
    private readonly updateAccessTokenRepository: UpdateAccountAccessTokenRepository,
    private readonly senderMail: SenderMail
  ) { }
  async send(
    recoverAccountParams: SendMailRecoverAccountPassword.Params
  ): Promise<SendMailRecoverAccountPassword.Return> {
    const account = await this.loadAccountByEmailRepository.load({
      email: recoverAccountParams.email,
    });
    if (account) {
      const accessToken = await this.encrypter.encrypt(account.id);
      await this.updateAccessTokenRepository.updateAccessToken(
        account.id,
        accessToken
      );
      const mailData = recoverAccountPasswordTemplate({ account, accessToken })
      
      const sendedMail = await this.senderMail.send(mailData);
      if (sendedMail) {
        return sendedMail;
      }
    }
    return null;
  }
}
