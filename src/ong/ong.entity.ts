import * as bcrypt from 'bcrypt';

export class Usuario {
  id: string;
  nome: string;
  razaosocial: string;
  cnpj: string;
  email: string;
  senha: string;
  telefone: string;
  cidade: string;
  endereco: string;

  constructor(
    id: string,
    nome: string,
    razaosocial: string,
    cnpj: string,
    email: string,
    senha: string,
    telefone: string,
    cidade: string,
    endereco: string,
  ) {
    this.id = id;
    this.nome = nome;
    this.razaosocial = razaosocial;
    this.cnpj = cnpj;
    this.email = email;
    this.senha = senha;
    this.telefone = telefone;
    this.cidade = cidade;
    this.endereco = endereco;
  }

  trocaSenha(senha: string) {
    const saltOrRounds = 10;
    this.senha = bcrypt.hashSync(senha, saltOrRounds);
  }

  login(senha: string) {
    return bcrypt.compareSync(senha, this.senha)
  }

}