# Busca as informações para o dashboard de um distribuidor

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada do tipo **POST** na rota **/api/distributor/dashboard**
> 2. ✅ Busca as informações de atendimentos
> 2. ✅ Busca as informações de vendas
> 3. ✅ Retorna **200** com as informações encontradas

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 8. ✅ Retorna erro **500** se der erro ao tentar buscar as informações de atendimentos
> 7. ✅ Retorna erro **500** se der erro ao tentar buscar as informações de vendas