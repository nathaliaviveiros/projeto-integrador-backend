import { Module } from '@nestjs/common';
import { AdocaoController } from './adocao.controller.js';

 
@Module({
  imports: [],
  controllers: [AdocaoController],
  providers: [adocaoCadastrados],
})
export class AdocaoModule {}