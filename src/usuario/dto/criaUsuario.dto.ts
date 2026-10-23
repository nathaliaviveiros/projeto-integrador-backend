import { IsEmail, IsNumber, IsString, MinLength } from 'class-validator';
 
export class criaUsuarioDTO {

  @IsString()
    nome!: string;
  
  @IsEmail()
  @IsString()
  email!: string;

  @MinLength(6)
  @IsString()
    senha: string;

  @IsString()
    cpf: string;
 
  @IsString()
    dataNascimento: string;
 
 
  @IsString()
    telefone!: string;
}