# Cadastra um novo atendimento técnico

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada do tipo **POST** na rota **/api/technical-support**
> 2. ✅ Valida dados obrigatórios **client**: { `id`, `city`, `contact`, `countryId`, `email`, `phone` e `type` }, **technicalSupport**: [{`clientReport`, `defect`, `equipmentId`, `files`: [{ `extension`, `description`, `url`}], `replacedParts`: [{ `amount`, `historicalValue`, `partId`, `reportedDefect` }], `servicePerformed`, `technicians`: {`contact`, `email` e `phone`}}]
> 3. ✅ **Busca** um cliente com os dados informados
> 4. ✅ **Atualiza** o cliente com os dados informados
> 5. ✅ **Cria** um técnico com os dados informados para cada equipamento
> 6. ✅ **Cria** as peças substituídas com os dados informados para cada equipamento
> 7. ✅ **Cria** os arquivos com os dados informados para cada equipamento
> 8. ✅ **Cria** as peças trocadas com os dados informados para cada equipamento
> 9. ✅ **Cria** um atendimento técnico com os dados informados para cada equipamento
> 10. ✅ **Cria** um evento Novo Atendimento
> 11. ✅ Retorna **200** (ok)

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **401** se a não passar na autenticação
> 3. ✅ Retorna erro **400** se algum dado obrigatório não for fornecido pelo cliente
> 4. ✅ Retorna erro **500** se der erro ao tentar criar o cliente
> 5. ✅ Retorna erro **500** se der erro ao tentar criar o técnico
> 6. ✅ Retorna erro **500** se der erro ao tentar criar o atendimento técnico
> 7. ✅ Retorna erro **500** se der erro ao tentar criar os arquivos

