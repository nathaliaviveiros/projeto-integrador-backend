export class Adocao {
  id_adocao: string;
  id_pet: string;
  id_ong: string;
  id_usuario: string;
  espacoAdequado: boolean;
  passeiosDiarios: boolean;
  filhosMenores: boolean;
  condicoesVeterinarias: boolean;
  justificativa: string;
  dataSolicitacao: Date;

  constructor(
    id_adocao: string,
    id_pet: string,
    id_ong: string,
    id_usuario: string,
    espacoAdequado: boolean,
    passeiosDiarios: boolean,
    filhosMenores: boolean,
    condicoesVeterinarias: boolean,
    justificativa: string,
    dataSolicitacao: Date
  ) {
    this.id_adocao = id_adocao;
    this.id_pet = id_pet;
    this.id_ong = id_ong;
    this.id_usuario = id_usuario;
    this.espacoAdequado = espacoAdequado;
    this.passeiosDiarios = passeiosDiarios;
    this.filhosMenores = filhosMenores;
    this.condicoesVeterinarias = condicoesVeterinarias;
    this.justificativa = justificativa;
    this.dataSolicitacao = dataSolicitacao;
  }

}
