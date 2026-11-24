import * as bcrypt from 'bcrypt';

export class Usuario {
  id: string;
  nome: string;
  email: string;
  senha: string;
  confirmarSenha:string
  cpf: string;
  dataNascimento: string;
  telefone: string;
  isUsuario:boolean;
  isOng:boolean;

  constructor(
  id: string,
  nome: string,
  email: string,
  senha: string,
  confirmarSenha:string,
  cpf: string,
  dataNascimento: string,
  telefone: string,
  isUsuario:boolean,
  isOng:boolean
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.confirmarSenha = confirmarSenha;
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
    this.telefone = telefone;
    this.isUsuario = isUsuario;
    this.isOng = isOng;
  }

  trocaSenha(senha: string) {
    const saltOrRounds = 10;
    this.senha = bcrypt.hashSync(senha, saltOrRounds);
  }

  login(senha: string) {
    return bcrypt.compareSync(senha, this.senha)
  }

}