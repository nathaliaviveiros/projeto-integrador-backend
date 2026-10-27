import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity.js';
import {v4 as uuid} from 'uuid';
import { alteraUsuarioDTO } from './dto/alteraUsuario.dto.js';
import { adocao } from './adocao.entity.js';
 
@Injectable()
export class adocaoEfetuada {
  #ong: adocao[] = [];
 
  adicionaAdocao(dadosAdocao: any) {
    let adocao = new Adocao(
      uuid(),
      dadosOng.nome,
      dadosOng.razaosocial,
      dadosOng.cnpj,
      dadosOng.email,
      dadosOng.senha,
      dadosOng.telefone,
      dadosOng.endereco,
      dadosOng.cidade,

  id_adocao: string;
  id_pet: string;
  id_ong: string;
  id_usuario: string;
  tutor: string;
  data: string;

    );
 
    this.#adocao.push(adocao);
    return adocao.id;
  }
 
  retornarOng() {
    return this.#ong;
  }
 
  retornarOngPorID(id:string) {
    const possivelong = this.#ong.find(
        ongSalvo => ongSalvo.id === id
    )
    if(!possivelong){
      throw new Error('Ong não localizado')
    }
    return possivelong;
  }

  async validaEmail(email: string){
    const possivelong = this.#ong.find(
      ong => ong.email === email
    );
  }
  async atualizaOng(id: string, dadosOng: alteraOngDTO){
    let possivelong = this.retornarOngPorID(id);
    Object.entries(dadosOng).forEach(([chave,valor]) =>{
      if (chave == 'id'){
        return;
      }else if (valor === undefined){
        return;
      }else if (chave === undefined){
        possivelOng.trocaSenha(valor)
      }
      (possivelOng as any) [chave] = valor;
    }
  )
  return possivelOng.id;
  }

  async apagaOng(id:string){
    let possivelOng = this.retornarOngPorID(id)

    this.#ong = this.#ong.filter(
      ongSalvo => ongSalvo.id !==id
    )
  }

  async buscaEmail(email: string){
    const possivelOng = this.#ong.find(
      ong => ong.email === email
    );
    if(!possivelOng){
      throw new Error('Ong não localizado')
    }
    return possivelOng;
    }

  async validaLogin(email:string, senha:string){
    const possivelOng = await this.buscaEmail(email)
    if (possivelOng.login(senha)){
      return possivelOng;
    }else{
      return null;
    }
  }

}