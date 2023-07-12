import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";


export class CreateUserDto {
  @IsNotEmpty() name: string;
  @IsNotEmpty() username: string;
  @IsNotEmpty() password: string;
  @IsNotEmpty() whatsapp: string;
  @IsNotEmpty() @IsEmail() email: string;
  @IsNotEmpty() isAdmin: boolean;
}

export class UpdateUserDto {
  @IsOptional() @IsNotEmpty() name?: string;
  @IsOptional() @IsNotEmpty() username?: string;
  @IsOptional() @IsNotEmpty() password?: string;
  @IsOptional() @IsNotEmpty() @IsEmail() email?: string;
  @IsOptional() @IsNotEmpty() isAdmin?: boolean;
  @IsOptional() @IsNotEmpty() whatsapp?: string;
  @IsOptional() @IsNotEmpty() refreshToken?: string;
}