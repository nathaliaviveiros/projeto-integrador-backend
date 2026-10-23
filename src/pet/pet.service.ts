import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity.js';
import { v4 as uuid } from 'uuid';

@Injectable()
export class petService {
  #pets: Pet[] = [];

  constructor() {}

  adicionarPet(dadosPet: any) {
    let novoPet = new Pet(
      uuid(),
      dadosPet.nome,
      dadosPet.especie,
      dadosPet.raca,
      dadosPet.sexo,
      dadosPet.idade,
      dadosPet.isVacinado,
      dadosPet.isCastrado,
      dadosPet.porte,
      dadosPet.cidade,
      dadosPet.responsavel,
      dadosPet.desc,
      dadosPet.image,
    );
    this.#pets.push(novoPet);
    return novoPet.id;
  }

  buscarTodosPets() {
    return this.#pets;
  }

  buscarPetPorId(id: string) {
    const buscaPet = this.#pets.find((petSalvo) => petSalvo.id === id);
    if (!buscaPet) {
      throw new Error('Pet não localizado');
    }
    return buscaPet;
  }

  deletarPetPorId(id: string) {
    const buscaPet = this.buscarPetPorId(id);

    this.#pets = this.#pets.filter((petSalvo) => petSalvo.id !== id);
  }
}
