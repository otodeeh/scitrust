# Deleta um registro de venda pelo ID

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada do tipo **DELETE** na rota **/api/sales-record/:id**
> 2. ✅ Valida dados obrigatórios **id**
> 3. ✅ **Busca** um registro de venda pelo id fornecido na url
> 4. ✅ **Atualiza** para null os campos installationDate e salesRecordId dos equipamentos do registro de venda
> 5. ✅ **Atualiza** o campo deletedAt do registro de venda
> 6. ✅ Retorna **200**

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **401** se a não passar na autenticação
> 3. ✅ Retorna erro **400** se algum o id não for fornecido pelo cliente
> 4. ✅ Retorna erro **400** se não encontrar o registro de venda com o ID fornecido
> 5. ✅ Retorna erro **500** se der erro ao tentar buscar o registro de venda
> 6. ✅ Retorna erro **500** se der erro ao tentar atualizar os equipamentos do registro de vendas
> 7. ✅ Retorna erro **500** se der erro ao tentar atualizar o registro de venda

