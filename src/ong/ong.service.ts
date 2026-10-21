import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity.js';
import {v4 as uuid} from 'uuid';
import { alteraUsuarioDTO } from './dto/alteraUsuario.dto.js';
 
@Injectable()
export class usuariosCadastrados {
  #usuarios: Usuario[] = [];
 
  adicionaUsuario(dadosUsuario: any) {
    let usuario = new Usuario(
      uuid(),
      dadosUsuario.nome,
      dadosUsuario.idade,
      dadosUsuario.cidade,
      dadosUsuario.email,
      dadosUsuario.telefone,
      dadosUsuario.senha,
      dadosUsuario.endereco,

      id: string;
  nome: string;
  idade: number;
  cidade: string;
  email: string;
  telefone: string;
  senha: string;
  endereco: string
    );
 
    this.#usuarios.push(usuario);
    return usuario.id;
  }
 
  retornarUsuarios() {
    return this.#usuarios;
  }
 
  retornarUsuarioPorID(id:string) {
    const possivelusuario = this.#usuarios.find(
        usuarioSalvo => usuarioSalvo.id === id
    )
    if(!possivelusuario){
      throw new Error('Usuario não localizado')
    }
    return possivelusuario;
  }

  async validaEmail(email: string){
    const possivelusuario = this.#usuarios.find(
      usuario => usuario.email === email
    );
  }
  async atualizaUsuario(id: string, dadosAtualizacao: alteraUsuarioDTO){
    let possivelUsuario = this.retornarUsuarioPorID(id);
    Object.entries(dadosAtualizacao).forEach(([chave,valor]) =>{
      if (chave == 'id'){
        return;
      }else if (valor === undefined){
        return;
      }else if (chave === undefined){
        possivelUsuario.trocaSenha(valor)
      }
      (possivelUsuario as any) [chave] = valor;
    }
  )
  return possivelUsuario.id;
  }

  async apagaUsuario(id:string){
    let possivelUsuario = this.retornarUsuarioPorID(id)

    this.#usuarios = this.#usuarios.filter(
      usuarioSalvo => usuarioSalvo.id !==id
    )
  }

  async buscaEmail(email: string){
    const possivelUsuario = this.#usuarios.find(
      usuario => usuario.email === email
    );
    if(!possivelUsuario){
      throw new Error('Usuario não localizado')
    }
    return possivelUsuario;
    }

  async validaLogin(email:string, senha:string){
    const possivelUsuario = await this.buscaEmail(email)
    if (possivelUsuario.login(senha)){
      return possivelUsuario;
    }else{
      return null;
    }
  }

}