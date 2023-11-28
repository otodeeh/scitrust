import { AddCredit, GenericGetApiProtheus, GetDistributorToScheduleTask, UpdateNciToProtheus } from "domain/usecases";
import { ServerError } from "presentation/errors";
import {
  badRequest,
  ok,
  serverError
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse
} from "presentation/protocols";

export class GetDistributorsCreditsFromProtheusController implements Controller {
  constructor(
    private readonly getDistributorToScheduleTask: GetDistributorToScheduleTask,
    private readonly genericGetApiProtheus: GenericGetApiProtheus,
    private readonly addCredit: AddCredit,
    private readonly updateNciToProtheus: UpdateNciToProtheus,
  ) { }
  async handle(httpRequest: HttpRequest<any, any, any>): Promise<HttpResponse> {
    try {
      const distributors = await this.getDistributorToScheduleTask.get()
      const distributorsProtheusCode = distributors.map((distributor) => `'${distributor.codeProtheus}'`).join(",")
      const whereClause = `E1_PREFIXO = 'NCI' AND E1_XPCSINC = 'F' AND D_E_L_E_T_ <> '*' AND E1_CLIENTE IN (${distributorsProtheusCode})`

      const credits = await this.genericGetApiProtheus.request<{
        "E1_PREFIXO": boolean,
        "E1_TIPO": boolean,
        "E1_NUM": boolean,
        "E1_NATUREZ": boolean,
        "E1_CLIENTE": boolean,
        "E1_LOJA": boolean,
        "E1_HIST": boolean,
        "E1_EMISSAO": boolean,
        "E1_VENCTO": boolean,
        "E1_VENCREA": boolean,
        "E1_ORIGEM": boolean,
        "E1_SALDO": boolean,
        "E1_VALOR": boolean,
        "E1_TXMOEDA": boolean,
        "E1_XPCSINC": boolean,
        "E1_XIDCOME": boolean,
      },
        {
          "E1_PREFIXO": string,
          "E1_TIPO": string,
          "E1_NUM": string,
          "E1_NATUREZ": string,
          "E1_CLIENTE": string,
          "E1_LOJA": string,
          "E1_HIST": string,
          "E1_EMISSAO": string,
          "E1_VENCTO": string,
          "E1_VENCREA": string,
          "E1_ORIGEM": string,
          "E1_SALDO": number,
          "E1_VALOR": number,
          "E1_TXMOEDA": number,
          "E1_XPCSINC": string,
          "E1_XIDCOME": string,
        }>({
          EMPRESA: "01",
          FILIAL: "01",
          MAPEAMENTO_DE_CAMPOS: [
            {
              NOME: "E1_PREFIXO",
              TIPO: "CARACTERE",
              TABELA: "",
              NOME_NA_TABELA: "",
              MAPEAMENTO_DE_CAMPOS: [],
              MSSEEK1: "",
              MSSEEK2: ""
            },
            {
              NOME: "E1_TIPO",
              TIPO: "CARACTERE",
              TABELA: "",
              NOME_NA_TABELA: "",
              MAPEAMENTO_DE_CAMPOS: [],
              MSSEEK1: "",
              MSSEEK2: ""
            },
            {
              NOME: "E1_NUM",
              TIPO: "CARACTERE",
              TABELA: "",
              NOME_NA_TABELA: "",
              MAPEAMENTO_DE_CAMPOS: [],
              MSSEEK1: "",
              MSSEEK2: ""
            },
            {
              NOME: "E1_NATUREZ",
              TIPO: "CARACTERE",
              TABELA: "",
              NOME_NA_TABELA: "",
              MAPEAMENTO_DE_CAMPOS: [],
              MSSEEK1: "",
              MSSEEK2: ""
            },
            {
              NOME: "E1_CLIENTE",
              TIPO: "CARACTERE",
              TABELA: "",
              NOME_NA_TABELA: "",
              MAPEAMENTO_DE_CAMPOS: [],
              MSSEEK1: "",
              MSSEEK2: ""
            },
            {
              NOME: "E1_LOJA",
              TIPO: "CARACTERE",
              TABELA: "",
              NOME_NA_TABELA: "",
              MAPEAMENTO_DE_CAMPOS: [],
              MSSEEK1: "",
              MSSEEK2: ""
            },
            {
              NOME: "E1_HIST",
              TIPO: "CARACTERE",
              TABELA: "",
              NOME_NA_TABELA: "",
              MAPEAMENTO_DE_CAMPOS: [],
              MSSEEK1: "",
              MSSEEK2: ""
            },
            {
              NOME: "E1_EMISSAO",
              TIPO: "DATA",
              TABELA: "",
              NOME_NA_TABELA: "",
              MAPEAMENTO_DE_CAMPOS: [],
              MSSEEK1: "",
              MSSEEK2: ""
            },
            {
              NOME: "E1_VENCTO",
              TIPO: "DATA",
              TABELA: "",
              NOME_NA_TABELA: "",
              MAPEAMENTO_DE_CAMPOS: [],
              MSSEEK1: "",
              MSSEEK2: ""
            },
            {
              NOME: "E1_VENCREA",
              TIPO: "DATA",
              TABELA: "",
              NOME_NA_TABELA: "",
              MAPEAMENTO_DE_CAMPOS: [],
              MSSEEK1: "",
              MSSEEK2: ""
            },
            {
              NOME: "E1_ORIGEM",
              TIPO: "CARACTERE",
              TABELA: "",
              NOME_NA_TABELA: "",
              MAPEAMENTO_DE_CAMPOS: [],
              MSSEEK1: "",
              MSSEEK2: ""
            },
            {
              NOME: "E1_SALDO",
              TIPO: "NUMERO",
              TABELA: "",
              NOME_NA_TABELA: "",
              MAPEAMENTO_DE_CAMPOS: [],
              MSSEEK1: "",
              MSSEEK2: ""
            },
            {
              NOME: "E1_VALOR",
              TIPO: "NUMERO",
              TABELA: "",
              NOME_NA_TABELA: "",
              MAPEAMENTO_DE_CAMPOS: [],
              MSSEEK1: "",
              MSSEEK2: ""
            },
            {
              NOME: "E1_TXMOEDA",
              TIPO: "NUMERO",
              TABELA: "",
              NOME_NA_TABELA: "",
              MAPEAMENTO_DE_CAMPOS: [],
              MSSEEK1: "",
              MSSEEK2: ""
            },
            {
              NOME: "E1_XPCSINC",
              TIPO: "CARACTERE",
              TABELA: "",
              NOME_NA_TABELA: "",
              MAPEAMENTO_DE_CAMPOS: [],
              MSSEEK1: "",
              MSSEEK2: ""
            },
            {
              NOME: "E1_XIDCOME",
              TIPO: "CARACTERE",
              TABELA: "",
              NOME_NA_TABELA: "",
              MAPEAMENTO_DE_CAMPOS: [],
              MSSEEK1: "",
              MSSEEK2: ""
            }
          ],
          QUERY_SELECT: "E1_PREFIXO, E1_TIPO, E1_NUM, E1_NATUREZ, E1_CLIENTE, E1_LOJA, E1_HIST, E1_EMISSAO, E1_VENCTO, E1_VENCREA, E1_ORIGEM, E1_SALDO, E1_VALOR, E1_TXMOEDA, E1_XPCSINC, E1_XIDCOME",
          QUERY_WHERE: whereClause,
          TABLE: "SE1",
          MSSEEK1: "",
          MSSEEK2: "",
          PAGINA: 0,
          LIMITE: 100
        });

      if (!credits?.MENSAGEM) {
        return badRequest(new ServerError(`Error getting distributors credits on protheus with where clause: '${whereClause}'`));
      }

      const result = []

      credits.REGISTROS.map(async (credit) => {
        const newCredit = await this.addCredit.addCredit({
          creditId: credit.E1_XIDCOME ? Number(credit.E1_XIDCOME) : 0,
          distributorCode: credit.E1_CLIENTE,
          balance: credit.E1_SALDO,
          ptax: credit.E1_TXMOEDA,
          createdAt: new Date(credit.E1_EMISSAO),
          dueAt: new Date(credit.E1_VENCTO),
          observation: credit.E1_HIST,
          nature: credit.E1_NATUREZ,
          value: credit.E1_VALOR
        })

        if (!newCredit) {
          return badRequest(new ServerError(`Error adding distributor credit: ${credit.E1_NUM} `));
        }

        const updatedNci = await this.updateNciToProtheus.request({
          distributorCode: credit.E1_CLIENTE + credit.E1_LOJA,
          externalId: String(newCredit.id),
          technicalSupport: credit.E1_NUM
        })

        result.push(updatedNci);
      })

      if (credits.REGISTROS.length === 0) {
        return ok({ importedCreditsCount: 0, hasNext: credits.PROXIMA_PAGINA })
      }

      return ok({ updatedCredits: result, hasNext: credits.PROXIMA_PAGINA });
    } catch (error) {
      return serverError(error);
    }
  }
}