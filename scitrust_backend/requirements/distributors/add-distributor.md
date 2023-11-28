# Cadastra um novo distribuidor

> ## Caso de sucesso

> 1. ✅ Recebe uma requisição autenticada **comex_user** ou **digital_endeavor_admin** do tipo **POST** na rota **/api/distributor**
> 2. ✅ Valida dados obrigatórios **account**: { `contact`, `email`, `language`, `phone`, `role` }, **codeProtheus** e **name**
> 3. ✅ **Valida** se não existe uma conta de acesso com o email fornecido
> 5. ✅ **Cria** um distribuidor com os dados informados e o id da localização
> 6. ✅ Gera uma senha `Parceiro@Prática` **criptografada** (essa senha não pode ser descriptografada)
> 7. ✅ **Cria** uma conta de de acesso com os dados informados, o id do distribuidor e a permissão de `distributor_admin`
> 8. ✅ Retorna **200** com o id

> ## Exceções

> 1. ✅ Retorna erro **404** se a API não existir
> 2. ✅ Retorna erro **401** se a não passar na autenticação
> 3. ✅ Retorna erro **400** se algum dado obrigatório não for fornecido pelo client
> 4. ✅ Retorna erro **403** se o **email** fornecido já estiver em uso
> 5. ✅ Retorna erro **500** se der erro ao tentar criar o distribuidor
> 6. ✅ Retorna erro **500** se der erro ao tentar gerar uma senha criptografada
> 7. ✅ Retorna erro **500** se der erro ao tentar criar a conta de acesso
> 8. ✅ Retorna erro **500** se der erro ao tentar criar uma localização

