import { IsEmail, IsString } from "class-validator";

export class LoginOngDTO{
    @IsEmail({}, {message: "Email inválido"})
    email: string;

    @IsString()
    senha:string;
}