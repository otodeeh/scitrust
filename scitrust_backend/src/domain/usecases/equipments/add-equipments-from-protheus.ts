export interface AddEquipmentsFromProtheus {
  add(params: AddEquipmentsFromProtheus.Params): Promise<AddEquipmentsFromProtheus.Return>;
}

export namespace AddEquipmentsFromProtheus {
  export type Params = {
    AA3_CODCLI: string
    AA3_DTVEND: string
    AA3_CODPRO: string
    AA3_CODPROB1_DESC: string
    AA3_NUMSER: string
  }[];
  export type Return = { importedEquipmentCount: number };
}
