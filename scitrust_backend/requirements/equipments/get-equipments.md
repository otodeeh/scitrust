# Busca todos equipamentos

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada do tipo **GET** na rota **/api/equipments**
> 2. ✅ Valida dados obrigatórios  **term**, **offset**, **limit** e **sold**
> 3. ✅ **Busca** todos equipamentos conforme parâmetros fornecidos
> 4. ✅ Retorna **200** com a quantidade de registros, a paginação e a lista de equipamentos

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **401** se a não passar na autenticação
> 3. ✅ Retorna erro **500** se der erro ao tentar buscar os equipamentos

