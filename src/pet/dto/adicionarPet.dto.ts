import { IsBoolean, IsString } from 'class-validator';

export class NovoPetDTO {
  @IsString()
  nome: string;

  @IsString()
  especie: string;

  @IsString()
  raca: string;

  @IsString()
  sexo: string;
  
  @IsString()
  idade: string;

  @IsBoolean()
  isVacinado: boolean;

  @IsBoolean()
  isCastrado: boolean;

  @IsString()
  porte: string;

  @IsString()
  cidade: string;

  @IsString()
  responsavel: string;

  @IsString()
  desc: string;

  @IsString()
  image: string;
}
