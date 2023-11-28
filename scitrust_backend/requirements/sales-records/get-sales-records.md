# Busca todos registros de venda

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada do tipo **GET** na rota **/api/sales-record**
> 2. ✅ Valida dados obrigatórios  **term**, **offset**, **limit** e **distributorId**
> 3. ✅ **Busca** todos registros de venda conforme parâmetros fornecidos
> 4. ✅ Retorna **200** com a quantidade de registros, a paginação e a lista de registros de venda

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **401** se a não passar na autenticação
> 3. ✅ Retorna erro **500** se der erro ao tentar buscar os registros de venda

