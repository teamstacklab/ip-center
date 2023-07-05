import { IsNotEmpty } from "class-validator";

export class CreateComunicadoDto {
  @IsNotEmpty() name: string;
  @IsNotEmpty() description: string;
}