import * as bcrypt from 'bcrypt';

export class Pet {
  id: string;
  nome: string;
  especie: string;
  raca: string;
  sexo: string;
  idade: string;
  isVacinado: boolean;
  isCastrado: boolean;
  porte: string;
  cidade: string;
  responsavel: string;
  desc: string;
  image: string;

  constructor(
    id: string,
    nome: string,
    especie: string,
    raca: string,
    sexo: string,
    idade: string,
    isVacinado: boolean,
    isCastrado: boolean,
    porte: string,
    cidade: string,
    responsavel: string,
    desc: string,
    image: string,
  ) {
    this.id = id;
    this.nome = nome;
    this.especie = especie;
    this.raca = raca;
    this.sexo = sexo;
    this.idade = idade;
    this.isVacinado = isVacinado;
    this.isCastrado = isCastrado;
    this.porte = porte;
    this.cidade = cidade;
    this.responsavel = responsavel;
    this.desc = desc;
    this.image = image;
  }
}
