import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { petService } from './pet.service.js';
import { NovoPetDTO } from './dto/adicionarPet.dto.js';

@Controller('/pet')
export class PetController {
  constructor(private pets: petService) {}

  @Post()
  async adicionarNovoPet(@Body() dados: NovoPetDTO) {
    const novoPet = await this.pets.adicionarPet(dados);
    if (!novoPet) {
      return {
        message: 'Cadastro não efetuado',
      };
    } else {
      return {
        message: 'Cadastro efetuado com sucesso',
      };
    }
  }

  @Get()
  async buscarTodosPetsCadastrados() {
    return {
      message: 'Consulta efetuada',
      pets: this.pets.buscarTodosPets(),
    };
  }

  @Get('/:id')
  async buscarPetPorId(@Param('id') id: string) {
    const busca = await this.pets.buscarPetPorId(id);

    if (busca) {
      return {
        message: 'usuario localizado',
        id: busca.id,
      };
    } else {
      return {
        message: 'usuario não localizado',
        id: null,
      };
    }
  }

  @Delete('/:id')
  async deletarPetPorId(@Param('id') id: string) {
    const buscaPet = await this.deletarPetPorId(id);

    return {
      message: 'Pet excluído.',
    };
  }
}
