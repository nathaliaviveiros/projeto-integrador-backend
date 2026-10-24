import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ongCadastrados } from './usuario.service.js';
import { criaOngDTO } from './dto/criaUsuario.dto.js';
import { alteraOngDTO } from './dto/alteraUsuario.dto.js';
import { LoginOngDTO } from './dto/login.dto.js';
 
@Controller('/ong')
export class OngController {
  constructor(private ong: ongCadastrados) {}
 
  @Post('/login')
  async loginOng(@Body() login: LoginOngDTO) {
    const ong = await this.ong.validaLogin(login.email, login.senha);
    if (ong) {
      return {
        message: 'Login efetuado com sucesso',
        usuario: {
          id: ong.id,
          nome: ong.nome,
          razaosocial: ong.razaosocial,
          cnpj: ong.cnpj,
          email: ong.email,
          senha: ong.senha,
          telefone: ong.telefone,
          endereco: ong.endereco,
          cidade: ong.cidade,
        },
      };
    } else {
      return {
        message: 'Email ou senha incorretos',
        usuario: null,
      };
    }
  }
 
  @Post()
  async cadastroOng(@Body() dadosOng: criaOngDTO) {
    let retorno = this.ong.adicionaOng(dadosOng);
    if (retorno) {
      return {
        message: 'cadastro efetuado com sucesso',
        id: retorno,
      };
    } else {
      return {
        message: 'cadastro não efetuado',
        id: null,
      };
    }
  }
 
  @Get()
  async retornarOng() {
    return {
      message: 'Consulta efetuada',
      usuarios: this.ong.retornarOng(),
    };
  }
 
  @Get('/:id')
  async retornarOngID(@Param('id') id: string) {
    // fazer consulta por id
    let resultado = this.ong.retornarOngPorID(id);
 
    if (resultado) {
      return {
        message: 'Ong localizado',
        id: resultado,
      };
    } else {
      return {
        message: 'Ong não localizado',
        id: null,
      };
    }
  }
 
  @Put('/:id')
  async atualizaOng(
    @Param('id') id: string,
    @Body() novosDados: alteraOngDTO,
  ) {
    const retorno = await this.ong.atualizaOng(id, novosDados);
    if (retorno) {
      return {
        message: 'Ong atualizado',
        id: retorno,
      };
    } else {
      return {
        message: 'Ong não atualizado',
        id: null,
      };
    }
  }
 
  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    const usuarioRemovido = await this.usuarios.apagaUsuario(id);
    return {
      usuario: usuarioRemovido,
      message: 'Usuario removido.',
    };
  }
}