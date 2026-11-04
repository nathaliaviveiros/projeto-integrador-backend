import { IsEmail, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validator/emailUnico.validator.js";

export class alteraOngDTO{
    @IsString()
    @IsOptional()
    nome: string;
    
    @IsString()
    @IsOptional()
    razaosocial: string;
    
    @IsString()
    @IsOptional()
    cnpj: string;
    
    @IsEmail()
    @EmailUnico({message:"Ja existe um usuario com esse email."})
    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    @MinLength(6)
    @IsOptional()
    senha: string; 
    
    @IsString()
    @IsOptional()
    telefone: string;

    @IsString()
    @IsOptional()
    cidade: string;
    
    @IsString()
    @IsOptional()
    endereco: string;
}