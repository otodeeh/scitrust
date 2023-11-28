export const compareDates = (date1: Date, date2: Date): boolean => {
  const parsedDate1 = new Date(date1);
  const parsedDate2 = new Date(date2);

  const year1 = parsedDate1.getFullYear();
  const month1 = parsedDate1.getMonth();
  const day1 = parsedDate1.getDate();

  const year2 = parsedDate2.getFullYear();
  const month2 = parsedDate2.getMonth();
  const day2 = parsedDate2.getDate();

  return year1 === year2 && month1 === month2 && day1 === day2;
};


export const parseBoolean = (value?: string) =>
  ['true', 'false'].includes(value) ? value === 'true' : false

export const composeNotificationData = (data?: { type: string, technicalSupportId: number, language: string }): { title: string, description: string } | null => {
  switch (data.type) {
    case ('NEW-COMMENT'):
      if (data.language === 'en') return { description: `A new comment was added to the support record ${data.technicalSupportId}. Do not forget to keep your eyes on the progress.`, title: `New Comment Added to ${data.technicalSupportId}` };
      if (data.language === 'es') return { description: `Un nuevo comentario fue agregado al registro de atención ${data.technicalSupportId}. No olvide de seguir el progreso.`, title: `Nuevo Comentario Agregado en ${data.technicalSupportId}` };
      if (data.language === 'pt') return { description: `Um novo comentário foi adicionado ao registro de atendimento ${data.technicalSupportId}. Não deixe de conferir para manter-se atualizado sobre o progresso.`, title: `Novo Comentário Adicionado em ${data.technicalSupportId}` };

    case ('FINANCIAL-APPROVED'):
      if (data.language === 'en') return { description: `Congratulations! The support record ${data.technicalSupportId} was approved by the financial department. Please check your credit balance in the "Credits" tab.`, title: `Support Record ${data.technicalSupportId} Approved` };
      if (data.language === 'es') return { description: `Felicidades! El registro de atención ${data.technicalSupportId} fue aprobado por el departamento financiero. Por favor, verifique su saldo de crédito en la Pestaña "Creditos".`, title: `Support Record ${data.technicalSupportId} Aprobado` };
      if (data.language === 'pt') return { description: `Parabéns! O registro de atendimento ${data.technicalSupportId} foi aprovado pelo departamento financeiro com sucesso. Consulte seu crédito na aba "Créditos".`, title: `Registro ${data.technicalSupportId} Aprovado` };

    case ('FINANCIAL-REPROVED'):
      if (data.language === 'en') return { description: `We regret to inform that the support record ${data.technicalSupportId} was rejected by the financial department. Please check the details in the system.`, title: `Support Record ${data.technicalSupportId} Rejected` };
      if (data.language === 'es') return { description: `Lamentamos informar que el registro de atención ${data.technicalSupportId} fue rechazado por el departamento financiero. Por favor, verifique los detalles en el sistema.`, title: `Support Record ${data.technicalSupportId} Rechazado` };
      if (data.language === 'pt') return { description: `Lamentamos informar que o registro de atendimento ${data.technicalSupportId} foi reprovado pelo departamento financeiro. Para mais detalhes sobre a reprovação, por favor, verifique as informações adicionais no sistema.`, title: `Registro ${data.technicalSupportId} Reprovado` };

    case ('TECHNICAL-APPROVED'):
      if (data.language === 'en') return { description: `Congratulations! The support record ${data.technicalSupportId} was approved by the technical department. Now you can proceed to the next step. Keep up the good work!`, title: `Support Record ${data.technicalSupportId} Approved` };
      if (data.language === 'es') return { description: `Felicitaciones! El registro de atención ${data.technicalSupportId} fue aprobado por el departamento técnico. Ahora puedes seguir con el siguiente paso. ¡Guarda el bueno de buendo!`, title: `Support Record ${data.technicalSupportId} Aprobado` };
      if (data.language === 'pt') return { description: `Parabéns! O registro de atendimento ${data.technicalSupportId} foi aprovado pelo departamento técnico com sucesso. Agora está pronto para prosseguir para a próxima etapa. Continue com o ótimo trabalho!`, title: `Registro ${data.technicalSupportId} Aprovado` };

    case ('TECHNICAL-REPROVED'):
      if (data.language === 'en') return { description: `We regret to inform that the support record ${data.technicalSupportId} was rejected by the technical department. Please check the details in the system.`, title: `Support Record ${data.technicalSupportId} Rejected` };
      if (data.language === 'es') return { description: `Lamentamos informar que el registro de atención ${data.technicalSupportId} fue rechazado por el departamento técnico. Por favor, verifique los detalles en el sistema.`, title: `Support Record ${data.technicalSupportId} Rechazado` };
      if (data.language === 'pt') return { description: `Lamentamos informar que o registro de atendimento ${data.technicalSupportId} foi reprovado pelo departamento técnico. Para mais detalhes sobre a reprovação, por favor, verifique as informações adicionais no sistema.`, title: `Registro ${data.technicalSupportId} Reprovado` };

    default:
      return null;
  }
}