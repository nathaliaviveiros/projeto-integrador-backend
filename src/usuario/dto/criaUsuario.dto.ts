import { IsEmail, IsNumber, IsString, MinLength } from 'class-validator';
 
export class criaUsuarioDTO {

  @IsString()
    nome!: string;
  
  @IsNumber()
    idade!: number;
 
  @IsString()
    cidade!: string;
 
  @IsEmail()
    @IsString()
    email!: string;
 
  @IsString()
    telefone!: string;
 
  @MinLength(6)
    @IsString()
    senha!: string;
 
  @IsString()
    endereco!: string;
}