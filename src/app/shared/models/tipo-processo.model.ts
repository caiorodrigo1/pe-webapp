export interface ITipoProcesso {
  id?: number;
  nome?: string;
}

export class TipoProcesso implements ITipoProcesso {
  constructor(public id?: number, public nome?: string) {}
}
