# Cadastra um novo registro de venda

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada do tipo **POST** na rota **/api/sales-record**
> 2. ✅ Valida dados obrigatórios **client**: { `city`, `name`, `countryId` e `email` }, **distributorId**, **equipments**: [{ `id`, `installationDate` }], **files**: [{ `extension`, `description` e `url`}], **observation** e **saleDate**
> 3. ✅ **Valida** se não existe registro de venda com os equipamentos informados
> 4. ✅ **Cria** um cliente com os dados informados
> 5. ✅ **Cria** um registro de venda com os dados informados
> 6. ✅ **Cria** os arquivos com os dados informados
> 7. ✅ **Atualiza** os equipamentos com o id do registro de venda
> 8. ✅ Retorna **200** com id do registro de venda

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **401** se a não passar na autenticação
> 3. ✅ Retorna erro **400** se algum dado obrigatório não for fornecido pelo cliente
> 4. ✅ Retorna erro **400** se algum **id** fornecido já estiver em uso
> 5. ✅ Retorna erro **500** se der erro ao tentar validar o registro de venda com os equipamentos informados
> 6. ✅ Retorna erro **500** se der erro ao tentar criar o cliente
> 7. ✅ Retorna erro **500** se der erro ao tentar criar o registro de venda
> 8. ✅ Retorna erro **500** se der erro ao tentar criar os arquivos
> 9. ✅ Retorna erro **500** se der erro ao tentar atualizar os equipamentos

