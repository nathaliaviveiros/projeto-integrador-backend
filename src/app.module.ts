import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { UsuarioModule } from './usuario/usuario.module.js';
import { PetModule } from './pet/pet.module.js';
import { OngModule } from './ong/ong.module.js';
import { AdocaoModule } from './adocao/adocao.module.js';


export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [UsuarioModule, PetModule, OngModule, AdocaoModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
