import { ITipoProcesso } from './tipo-processo.model';
import { IAssuntoProcesso } from './assunto-processo.model';
import { IHipoteseLegal } from './hipotese-legal.model';
import { IInteressadoProcesso } from 'src/app/shared/models/interessado-processo.model';
import { IAnexo } from './anexo.model';
import { IDespacho } from './despacho.model';
import { SituacaoProcessoEnum } from '../enums/situacao-processo.enum';
import { ITramitacaoProcesso } from './tramitacao-processo.model';
import { IDocumento } from './documento.model';

export interface IProcesso {
  id?: number;
  numeroProcesso?: string;
  assuntoId?: number;
  assunto?: IAssuntoProcesso;
  tipoId?: number;
  tipo?: ITipoProcesso;
  descricao?: string;
  naturezaProcesso?: string;
  numeroOriginal?: string;
  dataAutuacao?: string;
  nivelAcesso?: string;
  hipoteseLegalId?: number;
  hipoteseLegal?: IHipoteseLegal;
  dataCadastro?: string;
  dataAtualizacao?: string;
  dataDelecao?: string;
  deletado?: boolean;
  documentos?: IDocumento[];
  anexos?: IAnexo[];
  interessados?: IInteressadoProcesso[];
  etapaProcesso?: number;
  favorito?: boolean;
  favoritoId?: number;
  tramitacao?: ITramitacaoProcesso;
  tramitacoes?: ITramitacaoProcesso[];
  despachos?: IDespacho[];
  pastaAnexos?: string;
  pastaDocumentos?: string;
  processoPai?: number;
  situacao?: SituacaoProcessoEnum;
  capa?: Blob;
}

export class Processo implements IProcesso {
  constructor(
    public id?: number,
    public numeroProcesso?: string,
    public assuntoId?: number,
    public assunto?: IAssuntoProcesso,
    public tipoId?: number,
    public tipo?: ITipoProcesso,
    public descricao?: string,
    public naturezaProcesso?: string,
    public numeroOriginal?: string,
    public dataAutuacao?: string,
    public nivelAcesso?: string,
    public hipoteseLegalId?: number,
    public hipoteseLegal?: IHipoteseLegal,
    public dataCadastro?: string,
    public dataAtualizacao?: string,
    public dataDelecao?: string,
    public deletado?: boolean,
    public documentos?: IDocumento[],
    public anexos?: IAnexo[],
    public interessados?: IInteressadoProcesso[],
    public etapaProcesso?: number,
    public favorito?: boolean,
    public favoritoId?: number,
    public tramitacao?: ITramitacaoProcesso,
    public tramitacoes?: ITramitacaoProcesso[],
    public despachos?: IDespacho[],
    public pastaAnexos?: string,
    public pastaDocumentos?: string,
    public processoPai?: number,
    public situacao?: SituacaoProcessoEnum,
    public capa?: Blob
  ) {}
}

export interface IProcessoRequest {
  id?: number;
  processoId?: number;
  motivo?: string;
  interessados?: number[];
}

export class ProcessoRequest implements IProcessoRequest {
  constructor(
    public id?: number,
    public processoId?: number,
    public motivo?: string,
    public interessados?: number[]
  ) {}
}
