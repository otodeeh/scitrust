# Busca todos os países

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada do tipo **GET** na rota **/api/countries**
> 2. ✅ Valida dados obrigatórios  **term**, **offset** e **limit**
> 3. ✅ **Busca** todos countries conforme parâmetros fornecidos
> 4. ✅ Retorna **200** com a quantidade de registros, a paginação e a lista de countries

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **401** se a não passar na autenticação
> 3. ✅ Retorna erro **500** se der erro ao tentar buscar os countries

