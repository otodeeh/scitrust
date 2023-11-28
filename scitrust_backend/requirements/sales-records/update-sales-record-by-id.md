# Atualiza um registro de venda pelo ID

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada do tipo **PUT** na rota **/api/sales-record/:id**
> 2. ✅ Valida dados obrigatórios **client**: { `city`, `name`, `countryId`, `email`, `phone` e `type` }, **distributorOrder**, **equipments**: [{ `id`, `installationDate` }], **files**: [{ `extension`, `description`, `url`}] e **observation**
> 3. ✅ **Limpa** os equipamentos antigos do registro de venda pelo id fornecido na url
> 4. ✅ **deleta** os arquivos do registro de venda pelo id fornecido na url
> 5. ✅ **Atualiza** o registro de venda com os dados informados
> 6. ✅ **Atualiza** o cliente com os dados informados pelo id do cliente no registro de venda
> 7. ✅ **Atualiza** os equipamentos do registro de vendas com os dados informados
> 8. ✅ **Atualiza** os arquivos com os dados informados
> 9. ✅ Retorna **200** com id do registro de venda

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **401** se a não passar na autenticação
> 3. ✅ Retorna erro **400** se não encontrar o registro de venda com o ID fornecido
> 4. ✅ Retorna erro **400** se nenhum equipamento for fornecido
> 5. ✅ Retorna erro **500** se der erro ao tentar limpar os equipamentos antigos
> 6. ✅ Retorna erro **500** se der erro ao tentar deletar os arquivos antigos
> 7. ✅ Retorna erro **500** se der erro ao tentar atualizar o registro de venda
> 8. ✅ Retorna erro **500** se der erro ao tentar atualizar o cliente
> 9. ✅ Retorna erro **500** se der erro ao tentar atualizar os equipamentos
> 10. ✅ Retorna erro **500** se der erro ao tentar atualizar os arquivos
