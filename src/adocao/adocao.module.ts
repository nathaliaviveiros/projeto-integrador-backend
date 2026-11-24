import { Module } from '@nestjs/common';
import { AdocaoController } from './adocao.controller.js';
import { adocaoCadastrados } from './adocao.service.js';

 
@Module({
  imports: [],
  controllers: [AdocaoController],
  providers: [adocaoCadastrados],
})
export class AdocaoModule {}