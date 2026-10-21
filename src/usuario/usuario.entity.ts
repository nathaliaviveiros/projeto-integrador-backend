import * as bcrypt from 'bcrypt';

export class Usuario {
  id: string;
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;

  constructor(
  id: string,
  nome: string,
  email: string,
  senha: string,
  cpf: string,
  dataNascimento: string,
  telefone: string,
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
    this.telefone = telefone;
  }

  trocaSenha(senha: string) {
    const saltOrRounds = 10;
    this.senha = bcrypt.hashSync(senha, saltOrRounds);
  }

  login(senha: string) {
    return bcrypt.compareSync(senha, this.senha)
  }

}