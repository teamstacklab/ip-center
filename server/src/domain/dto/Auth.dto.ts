import { IsNotEmpty } from "class-validator";

// JWT Payload
export class PayloadDto {
  username: string;
  isAdmin: boolean;
  sub: number;
}

export class SignInDto {
    @IsNotEmpty() username: string;
    @IsNotEmpty() password: string;
}