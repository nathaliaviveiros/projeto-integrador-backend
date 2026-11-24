import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller.js';
import { usuariosService } from './usuario.service.js';
 
@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [usuariosService],
})
export class UsuarioModule {}
 