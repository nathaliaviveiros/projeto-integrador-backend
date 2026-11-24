import { IsBoolean, IsDate, IsEmail, IsNumber, IsString, MinLength } from 'class-validator';
 
export class criaAdocaoDTO {

  @IsString()
   id_pet: string;

   @IsString()
   id_ong: string;

   @IsString()
   id_usuario: string;
  
  @IsBoolean()
    espacoAdequado: boolean;

  @IsBoolean()
    passeiosDiarios: boolean;

  @IsBoolean()
    filhosMenores: boolean;
  
  @IsEmail()
  @IsBoolean()
  condicoesVeterinarias: boolean;

  @MinLength(6)
  @IsString()
    justificativa: string;

  @IsDate()
    dataSolicitacao: Date;
 
}    
    
    
    
