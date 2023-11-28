import { AddEquipmentsFromProtheus, GenericGetApiProtheus, GetDistributorToScheduleTask } from "domain/usecases";
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

export class GetDistributorsEquipmentsFromProtheusController implements Controller {
  constructor(
    private readonly getDistributorToScheduleTask: GetDistributorToScheduleTask,
    private readonly genericGetApiProtheus: GenericGetApiProtheus,
    private readonly addEquipmentsFromProtheus: AddEquipmentsFromProtheus,
  ) { }
  async handle(httpRequest: HttpRequest<any, any, any>): Promise<HttpResponse> {
    try {
      const distributors = await this.getDistributorToScheduleTask.get()

      const registeredSerials = distributors.map((distributor) => distributor.equipments.map((equipment) => `'${equipment.serialNumber}'`)).flat()
      const serialNumberNotIn = registeredSerials.length > 0 ? `AND AA3_NUMSER NOT IN (${registeredSerials.join(",")})` : ''
      const whereClause = `AA3_CODCLI IN (${distributors.map((distributor) => `'${distributor.codeProtheus}'`).join(",")}) ${serialNumberNotIn}`

      const equipments = await this.genericGetApiProtheus.request<{ "AA3_CODCLI": boolean, "AA3_DTVEND": boolean, "AA3_CODPRO": boolean, "AA3_NUMSER": boolean }, { "AA3_CODCLI": string, "AA3_DTVEND": string, "AA3_CODPRO": string, "AA3_CODPROB1_DESC": string, "AA3_NUMSER": string }>({
        EMPRESA: "01",
        FILIAL: "01",
        MAPEAMENTO_DE_CAMPOS: [{
          NOME: "AA3_CODCLI",
          TIPO: "CARACTERE",
          TABELA: "",
          NOME_NA_TABELA: "",
          MAPEAMENTO_DE_CAMPOS: [],
          MSSEEK1: "",
          MSSEEK2: ""
        },
        {
          NOME: "AA3_DTVEND",
          TIPO: "DATA",
          TABELA: "",
          NOME_NA_TABELA: "",
          MAPEAMENTO_DE_CAMPOS: [],
          MSSEEK1: "",
          MSSEEK2: ""
        },
        {
          NOME: "AA3_CODPRO",
          TIPO: "TABELA",
          TABELA: "SB1",
          NOME_NA_TABELA: "B1_DESC",
          MAPEAMENTO_DE_CAMPOS: [],
          MSSEEK1: "",
          MSSEEK2: ""
        },
        {
          NOME: "AA3_NUMSER",
          TIPO: "CARACTERE",
          TABELA: "",
          NOME_NA_TABELA: "",
          MAPEAMENTO_DE_CAMPOS: [],
          MSSEEK1: "",
          MSSEEK2: ""
        }
        ],
        QUERY_SELECT: "AA3_CODCLI, AA3_DTVEND, AA3_CODPRO, AA3_NUMSER",
        QUERY_WHERE: whereClause,
        TABLE: "AA3",
        MSSEEK1: "",
        MSSEEK2: "",
        PAGINA: 0,
        LIMITE: 100
      });

      if (!equipments?.MENSAGEM) {
        return badRequest(new ServerError(`Error getting distributors equipments on protheus with where clause: ${whereClause}`));
      }

      if (equipments.REGISTROS.length === 0) {
        return ok({ importedEquipmentCount: 0, hasNext: equipments.PROXIMA_PAGINA })
      }

      const result = await this.addEquipmentsFromProtheus.add(equipments.REGISTROS)
      return ok({ ...result, hasNext: equipments.PROXIMA_PAGINA });
    } catch (error) {
      return serverError(error);
    }
  }
}
