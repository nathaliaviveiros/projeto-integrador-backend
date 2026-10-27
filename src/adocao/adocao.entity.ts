import * as bcrypt from 'bcrypt';

export class adocao {
  id_adocao: string;
  id_pet: string;
  id_ong: string;
  id_usuario: string;
  tutor: string;
  data: string;

  constructor(
  id_adocao: string,
  id_pet: string,
  id_ong: string,
  id_usuario: string,
  tutor: string,
  data: string,
  ) {
    this.id_adocao = id_adocao;
    this.id_pet = id_pet;
    this.id_ong = id_ong;
    this.id_usuario = id_usuario;
    this.tutor = tutor;
    this.data = data;
  }

}