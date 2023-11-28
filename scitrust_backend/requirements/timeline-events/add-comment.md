# Cadastra um novo comentário na timeline de um atendimento técnico

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada do tipo **POST** na rota **/api/timeline-events/comment/:technicalSupportId**
> 2. ✅ Valida dados obrigatórios **technicalSupportId**, **files**:[{ `extension`, `description`, `url`}] e "observation"
> 3. ✅ **Busca** um atendimento com o technicalSupportId informado
> 4. ✅ **Cria** um evento Novo comentário
> 5. ✅ Retorna **200** (ok)

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **401** se a não passar na autenticação
> 3. ✅ Retorna erro **400** se algum dado obrigatório não for fornecido pelo cliente
> 4. ✅ Retorna erro **500** se der erro ao tentar buscar o atendimento
> 5. ✅ Retorna erro **500** se der erro ao tentar criar o evento

