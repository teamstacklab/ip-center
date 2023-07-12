import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateDemandDto {
  @IsNotEmpty() cpf: string;
  @IsNotEmpty() name: string;
  @IsNotEmpty() store: string;
  @IsNotEmpty() username: string;
  @IsNotEmpty() @IsEmail() email: string;
  @IsNotEmpty() password: string;
  @IsNotEmpty() whatsapp: string;
}
