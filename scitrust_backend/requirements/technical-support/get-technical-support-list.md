# Busca todos atendimentos técnicos

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada do tipo **GET** na rota **/api/technical-support-list**
> 2. ✅ Valida dados obrigatórios  **term**, **offset**, **limit**, **status** e **distributorId**
> 3. ✅ **Busca** todos atendimentos técnicos conforme parâmetros fornecidos
> 4. ✅ Retorna **200** com a quantidade de atendimentos, a paginação e a lista de atendimentos técnicos

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **401** se a não passar na autenticação
> 3. ✅ Retorna erro **500** se der erro ao tentar buscar os atendimentos técnicos


