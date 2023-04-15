import { IsNotEmpty } from "class-validator";

export class CreateDemandDto {
    @IsNotEmpty() cpf: string;
    @IsNotEmpty() name: string;
    @IsNotEmpty() loja: string;
    @IsNotEmpty() username: string;
    @IsNotEmpty() email: string;
    @IsNotEmpty() password: string;
}