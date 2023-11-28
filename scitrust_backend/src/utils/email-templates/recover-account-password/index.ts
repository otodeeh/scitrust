import { AccountModel } from "domain/models";
import { baseTemplate } from "../base-template";

export const recoverAccountPasswordTemplate = ({ account, accessToken }: { account: AccountModel, accessToken: string }) => {
  const tPt = {
    hello: `Olá, ${account.contact},`,
    title: 'Recuperação de Senha',
    text: 'Recebemos a sua solicitação para redefinir sua senha.',
    yoursSincerely: 'Atenciosamente,',
    textFooter: 'Equipe Prática',
    button: 'Redefinir Senha'
  }
  const tEn = {
    hello: `Hello, ${account.contact},`,
    title: 'Password Recovery',
    text: 'We received your request to reset your password.',
    yoursSincerely: 'Sincerely,',
    textFooter: 'Prática Team',
    button: 'Reset Password'
  }
  const tEs = {
    hello: `Hola, ${account.contact},`,
    title: 'Recuperación de contraseña',
    text: 'Recibimos su solicitud para restablecer su contraseña.',
    yoursSincerely: 'Atentamente,',
    textFooter: 'Equipo Prática',
    button: 'Restablecer contraseña'
  }

  const contentHtml = (t: any, account: AccountModel, accessToken: string) => {
    return `<div>${t.hello}<div><div>&nbsp;</div>` +
      `<div>${t.text}</div><div>&nbsp;</div>` +
      `<div><span style='background-color: transparent;'>` +
      `<strong><a target='_blank' style='color: #3c4858; text-decoration: none;' href='http://18.228.151.100:4141/${account.language}/recover-password?accessToken=${accessToken}'>${t.button}</a></strong></span></div>` +
      `<div>&nbsp;</div><div>&nbsp;</div><div>${t.yoursSincerely}</div>` +
      `<div>${t.textFooter}</div></div></div>`;
  }

  const data = {
    from: '"Prática Klimaquip" <technical.department@praticabr.com>',
    to: account.email,
  }

  switch (account.language) {
    case 'pt':
      return { ...data, subject: tPt.title, html: baseTemplate(contentHtml(tPt, account, accessToken), tPt.title) }
    case 'en':
      return { ...data, subject: tEn.title, html: baseTemplate(contentHtml(tEn, account, accessToken), tEn.title) }
    case 'es':
      return { ...data, subject: tEs.title, html: baseTemplate(contentHtml(tEs, account, accessToken), tEs.title) }

    default:
      return { ...data, subject: tEn.title, html: baseTemplate(contentHtml(tEn, account, accessToken), tEn.title) }
  }
}