# Busca todos créditos

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada do tipo **GET** na rota **/api/credits**
> 2. ✅ Valida dados obrigatórios  **term**, **offset**, **limit** e **status**
> 3. ✅ **Busca** todos créditos conforme parâmetros fornecidos
> 4. ✅ Retorna **200** com a quantidade de créditos, a paginação e a lista de créditos

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **401** se a não passar na autenticação
> 3. ✅ Retorna erro **500** se der erro ao tentar buscar os créditos


