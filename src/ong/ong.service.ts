import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity.js';
import {v4 as uuid} from 'uuid';
import { alteraUsuarioDTO } from './dto/alteraUsuario.dto.js';
 
@Injectable()
export class ongCadastrados {
  #ong: Ong[] = [];
 
  adicionaOng(dadosOng: any) {
    let ong = new Ong(
      uuid(),
      dadosOng.nome,
      dadosOng.razaosocial,
      dadosOng.cnpj,
      dadosOng.email,
      dadosOng.senha,
      dadosOng.telefone,
      dadosOng.endereco,
      dadosOng.cidade,

    );
 
    this.#ong.push(ong);
    return ong.id;
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