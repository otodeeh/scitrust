# Cadastra uma nova approval do tipo financial

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada do tipo **PUT** na rota **/api/approvals/financial/:approvalId**
> 2. ✅ Valida dados obrigatórios **approvalId**, **nature** e **observation**
> 3. ✅ **Busca** uma approval pelo approvalId informado
> 4. ✅ **Atualiza** uma approval com o tipo financial
> 5. ✅ **Cria** um credit com os dados dessa approval
> 6. ✅ **Cria** um event do tipo: Registro aprovado financeiro
> 7. ✅ Retorna **200** (ok)

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **401** se a não passar na autenticação
> 3. ✅ Retorna erro **400** se algum dado obrigatório não for fornecido pelo cliente
> 4. ✅ Retorna erro **500** se der erro ao tentar buscar uma approval
> 4. ✅ Retorna erro **500** se der erro ao tentar atualizar uma approval
> 5. ✅ Retorna erro **500** se der erro ao tentar criar um credit
> 6. ✅ Retorna erro **500** se der erro ao tentar criar um event

