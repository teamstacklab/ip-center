import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateUserDto {
    @IsOptional() @IsNotEmpty()
    name: string;

    @IsOptional() @IsNotEmpty()
    username: string;

    @IsOptional() @IsNotEmpty()
    password: string;

    @IsOptional() @IsNotEmpty() @IsEmail()
    email: string;

    @IsOptional() @IsNotEmpty()
    isAdmin: boolean;
}