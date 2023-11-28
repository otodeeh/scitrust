import { AddNciToProtheus, GetCreditsToScheduleTask } from "domain/usecases";
import {
  ok,
  serverError
} from "presentation/helpers";
import {
  Controller,
  HttpRequest,
  HttpResponse
} from "presentation/protocols";

export class ExportCreditsToProtheusController implements Controller {
  constructor(
    private readonly getCreditsToScheduleTask: GetCreditsToScheduleTask,
    private readonly addNciToProtheus: AddNciToProtheus,
  ) { }
  async handle(httpRequest: HttpRequest<any, any, any>): Promise<HttpResponse> {
    try {
      const credits = await this.getCreditsToScheduleTask.getCredits()
      if (credits.length === 0) {
        return ok({});
      }

      credits.map(async (credit) => await this.addNciToProtheus.request({
        externalId: String(credit.id),
        distributorCode: credit.approval.technicalSupport.equipment.distributor.codeProtheus + '01',
        dueDate: credit.dueAt,
        observation: credit.observation,
        option: credit.nature,
        ptax: credit.ptax,
        technicalSupport: addZerosLeft(`${credit.approval.technicalSupport.id}-${credit.approval?._count.credits + 1}`),
        value: credit.value
      }))

      return ok({});
    } catch (error) {
      return serverError(error);
    }
  }
}

function addZerosLeft(inputString: string) {
  return inputString.length >= 9 ? inputString : "0".repeat(9 - inputString.length) + inputString;
}