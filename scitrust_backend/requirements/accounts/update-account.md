# Atualiza uma conta através do id

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada do tipo **PUT** na rota **/api/accounts/:id**
> 2. ✅ Valida dados obrigatórios **id**
> 3. ✅ Valida dados opcionais **contact**, **deletedAt**, **email**, **language**, **phone**, **role** e **token**
> 5. ✅ **Busca** uma conta com o id fornecido
> 7. ✅ **Atualiza** os dados da conta
> 8. ✅ Retorna **200** (ok)

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **400** se id não for fornecido pelo cliente
> 3. ✅ Retorna erro **401** se a não passar na autenticação
> 4. ✅ Retorna erro **401** se o id fornecido for inválido
> 5. ✅ Retorna erro **500** se der erro ao tentar buscar a conta com o id
> 6. ✅ Retorna erro **500** se der erro ao tentar gerar uma senha criptografada
> 7. ✅ Retorna erro **500** se der erro ao tentar atualizar a conta
