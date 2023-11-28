# Cadastra uma nova approval do tipo financial

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada do tipo **POST** na rota **/api/approvals/technical/:technicalSupportId**
> 2. ✅ Valida dados obrigatórios **technicalSupportId** e **approvedParts**:[{ `amount`, `historicalValue`, `partId`}]
> 3. ✅ **Busca** uma technical support pelo technicalSupportId informado
> 4. ✅ **Cria** uma approval do tipo technical
> 5. ✅ **Cria** um event do tipo: Registro aprovado técnico
> 6. ✅ Retorna **200** (ok)

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **401** se a não passar na autenticação
> 3. ✅ Retorna erro **400** se algum dado obrigatório não for fornecido pelo cliente
> 4. ✅ Retorna erro **500** se der erro ao tentar buscar uma technicalSupport
> 5. ✅ Retorna erro **500** se der erro ao tentar criar uma approval
> 6. ✅ Retorna erro **500** se der erro ao tentar criar um credit
> 7. ✅ Retorna erro **500** se der erro ao tentar criar um event

