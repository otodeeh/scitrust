# Envia e-mail de recuperação de senha da conta

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/send-mail-recover-account-password**
> 2. ✅ Valida dados obrigatórios **email**
> 3. ✅ **Busca** uma conta com o email fornecido
> 4. ✅ Gera um **token** de acesso
> 5. ✅ Envia um email de recuperação de conta com o **token** de acesso para o email da conta
> 6. ✅ **Atualiza** os dados da conta com o token de acesso gerado
> 7. ✅ Retorna **200** (ok)

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **400** se o email não for fornecido pelo cliente
> 3. ✅ Retorna erro **500** se der erro ao tentar buscar a conta com o email
> 4. ✅ Retorna erro **500** se der erro ao tentar gerar o token de acesso 
> 5. ✅ Retorna erro **500** se der erro ao tentar enviar o email de recuperação com o token
> 6. ✅ Retorna erro **500** se der erro ao tentar atualizar a conta com o token de acesso gerado
