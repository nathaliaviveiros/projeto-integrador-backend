import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { adocaoCadastrados } from './adocao.service.js';


@Controller('/adocao')
export class AdocaoController {
  constructor(private adocao: adocaoCadastrados) {}
 
 
  @Post()
  async cadastroAdocao(@Body() dadosAdocao: criaAdocaoDTO) {
    let retorno = this.adocao.adicionaAdocao(dadosAdocao);
    if (retorno) {
      return {
        message: 'Adoção efetuado com sucesso',
        id: retorno,
      };
    } else {
      return {
        message: 'Adoção não efetuado',
        id: null,
      };
    }
  }
 
  @Get()
  async retornarAdocao() {
    return {
      message: 'Consulta efetuada',
      usuarios: this.adocao.retornarAdocao(),
    };
  }
 
  @Get('/:id')
  async retornarAdocaoID(@Param('id') id: string) {
    // fazer consulta por id
    let resultado = this.adocao.retornarAdocaoPorID(id);
 
    if (resultado) {
      return {
        message: 'Adoção localizado',
        id: resultado,
      };
    } else {
      return {
        message: 'Adoção não localizado',
        id: null,
      };
    }
  }
 
  @Delete('/:id')
  async removeAdocao(@Param('id') id: string) {
    const adocaoRemovido = await this.adocao.apagaAdocao(id);
    return {
      usuario: adocaoRemovido,
      message: 'Adoção removido.',
    };
  }
}