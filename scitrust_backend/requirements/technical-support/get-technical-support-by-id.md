# Busca um atendimento técnico pelo ID

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada do tipo **GET** na rota **/api/technical-support/:id**
> 2. ✅ **Busca** um atendimento técnico pelo id fornecido na url
> 3. ✅ Retorna **200** com o atendimento técnico

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **401** se a não passar na autenticação
> 3. ✅ Retorna erro **400** se não encontrar o atendimento técnico com o ID fornecido
> 4. ✅ Retorna erro **500** se der erro ao tentar buscar o atendimento técnico

