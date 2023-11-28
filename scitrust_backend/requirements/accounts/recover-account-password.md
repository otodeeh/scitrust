# Recuperar senha da conta

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/account-recover-password**
> 2. ✅ Valida dados obrigatórios **token**, **password** e **passwordConfirmation**
> 3. ✅ Valida que **password** e **passwordConfirmation** são iguais
> 4. ✅ **Busca** uma conta com o token fornecido
> 6. ✅ Gera uma senha **criptografada** (essa senha não pode ser descriptografada)
> 7. ✅ **Atualiza** os dados do usuário com a senha criptografada
> 8. ✅ Gera um **token** de acesso a partir do ID do usuário
> 9. ✅ **Atualiza** os dados do usuário com o token de acesso gerado
> 10. ✅ Retorna **200** (ok)

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **400** se token, password ou passwordConfirmation não forem fornecidos pelo cliente
> 3. ✅ Retorna erro **400** se password e passwordConfirmation não forem iguais
> 4. ✅ Retorna erro **401** se o token fornecido for inválido
> 6. ✅ Retorna erro **500** se der erro ao tentar buscar o usuário com o token
> 7. ✅ Retorna erro **500** se der erro ao tentar gerar uma senha criptografada
> 8. ✅ Retorna erro **500** se der erro ao tentar gerar o token de acesso
> 9. ✅ Retorna erro **500** se der erro ao tentar atualizar o usuário com o token de acesso gerado
> 10. ✅ Retorna erro **500** se der erro ao tentar atualizar o usuário com a senha criptografada
