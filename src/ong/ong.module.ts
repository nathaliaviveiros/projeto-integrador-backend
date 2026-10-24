import { Module } from '@nestjs/common';
import { OngController } from './ong.controller.js';
import { ongCadastrados } from './ong.service.js';
 
@Module({
  imports: [],
  controllers: [OngController],
  providers: [ongCadastrados],
})
export class OngModule {}