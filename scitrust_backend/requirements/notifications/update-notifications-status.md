# Atualiza o status de uma ou mais notificações

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada do tipo **PUT** na rota **/api/notifications**
> 2. ✅ Valida dados obrigatórios **notifications**: [{`id`, `status`}]
> 3. ✅ **Atualiza** a notificação com os dados informados
> 4. ✅ Retorna **200** com a notificação

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **401** se a não passar na autenticação
> 3. ✅ Retorna erro **400** se não encontrar o notificação com o ID fornecido
> 4. ✅ Retorna erro **400** se nenhum equipamento for fornecido
> 5. ✅ Retorna erro **500** se der erro ao tentar atualizar a notificação
