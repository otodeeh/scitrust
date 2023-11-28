# Busca todas as peças

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição do tipo **GET** na rota **/api/parts**
> 2. ✅ Valida dados obrigatórios  **term**, **offset**, **limit**
> 3. ✅ **Busca** todas peças conforme parâmetros fornecidos
> 4. ✅ Retorna **200** com a quantidade de registros, a paginação e a lista de peças

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **500** se der erro ao tentar buscar as peças


