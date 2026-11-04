import { IsEmail, IsNumber, IsString, MinLength } from 'class-validator';
 
export class criaOngDTO {

  @IsString()
    nome!: string;

  @IsString()
    razaosocial: string;

  @IsString()
    cnpj: string;
  
  @IsEmail()
  @IsString()
  email!: string;

  @MinLength(6)
  @IsString()
    senha: string;

  @IsString()
    telefone: string;

  @IsString()
    cidade: string;

  @IsString()
    endereco: string;
 
}