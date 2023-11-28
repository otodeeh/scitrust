export interface GenericGetApiProtheus {
  request<K, R>(params: GenericGetApiProtheus.Params): Promise<GenericGetApiProtheus.Return<K, R>>;
}

type MAPEAMENTO_DE_CAMPOS = {
  NOME: string;
  TIPO: string;
  TABELA: string;
  NOME_NA_TABELA: string;
  MAPEAMENTO_DE_CAMPOS: MAPEAMENTO_DE_CAMPOS[];
  MSSEEK1: string;
  MSSEEK2: string;
};

export namespace GenericGetApiProtheus {
  export type Params = {
    EMPRESA: string;
    FILIAL: string;
    MAPEAMENTO_DE_CAMPOS: MAPEAMENTO_DE_CAMPOS[];
    QUERY_SELECT: string;
    QUERY_WHERE: string;
    TABLE: string;
    MSSEEK1: string;
    MSSEEK2: string;
    PAGINA: number;
    LIMITE: number;
  }
  export type Return<K, R> = {
    MAPEAMENTO_CAMPOS: K[];
    PROXIMA_PAGINA: boolean;
    TOTAL: number;
    MENSAGEM: string;
    REGISTROS: R[];
  };
}
