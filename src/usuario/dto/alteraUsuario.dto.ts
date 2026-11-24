import { IsBoolean, IsDefined, IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class alteraUsuarioDTO {

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @MinLength(6)
  @IsString()
  @IsNotEmpty()
  senha: string;

  @IsString()
  @IsNotEmpty()
  confirmarSenha: string

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  dataNascimento: string;

  @IsString()
  @IsNotEmpty()
  telefone: string;
}