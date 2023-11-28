# Busca todas as contas

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada **digital_administrator** do tipo **GET** na rota **/api/accounts**
> 2. ✅ Valida dados obrigatórios  **term**, **offset** e **limit**
> 3. ✅ **Busca** todas contas conforme parâmetros fornecidos
> 4. ✅ Retorna **200** com a quantidade de registros, a paginação e a lista de contas

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **401** se a não passar na autenticação
> 3. ✅ Retorna erro **500** se der erro ao tentar buscar as contas

