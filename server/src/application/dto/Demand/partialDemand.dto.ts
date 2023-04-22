import { IsEmail } from "class-validator";

export class PartialDemandDto {
  cpf?: string;
  name?: string;
  username?: string;
  @IsEmail() email?: string;
  loja?: string;
  password?: string;
  whatsapp?: string;
  createdAt?: Date;
}