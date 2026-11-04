import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Adocao } from './adocao.entity.js';


@Injectable()
export class adocaoCadastrados {
  #adocao: Adocao[] = [];

  adicionaAdocao(dadosAdocao: any) {
    let adocao = new Adocao(
      uuid(),
      dadosAdocao.id_pet,
      dadosAdocao.id_ong,
      dadosAdocao.id_usuario,
      dadosAdocao.tutor,
      dadosAdocao.data,
    );

    this.#adocao.push(adocao);
    return adocao.id_adocao;
  }

  retornarAdocao() {
    return this.#adocao;
  }

  async apagaAdocao(id: string) {
    let possivelOng = this.retornarAdocaoPorID(id)

    this.#adocao = this.#adocao.filter(
      adocaoSalvo => adocaoSalvo.id_adocao !== id
    )
  }

  retornarAdocaoPorID(id: string) {
    const possivelAdocao = this.#adocao.find(
      adocaoSalvo => adocaoSalvo.id_adocao === id
    )
    if (!possivelAdocao) {
      throw new Error('Adoção não localizado')
    }
    return possivelAdocao;
  }
}