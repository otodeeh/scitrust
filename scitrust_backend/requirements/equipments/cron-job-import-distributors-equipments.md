# Job que atualiza os equipamentos que um distribuidor possuí

> ## Caso de sucesso

> 1. ✅ Executa a as 12h e as 18h minutos
> 2. ✅ **Busca** na nossa base de equipamentos os números de séries ja registrados dos distribuidores
> 3. ✅ **Busca** na API **PLMGEN** por equipamentos que não constam na nossa base
> 4. ✅ **Salva** na nossa base todos equipamentos encontrados

> ## Exceções

> 1. ✅ Registra erro se der erro ao tentar buscar os equipamentos na nossa base
> 2. ✅ Registra erro se der erro ao tentar buscar os equipamentos na API
> 3. ✅ Registra erro se der erro ao tentar salvar os equipamentos

