import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateComunicadoDto {
  @IsNotEmpty() @IsOptional()
  name: string;

  @IsNotEmpty() @IsOptional()
  description: string;
}