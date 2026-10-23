import { Module } from '@nestjs/common';
import { petService } from './pet.service.js';
import { PetController } from './pet.controller.js';
 
@Module({
  imports: [],
  controllers: [PetController],
  providers: [petService],
})
export class PetModule {}