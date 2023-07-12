import { IsNotEmpty, IsOptional } from "class-validator";


export class CreateComunicateDto {
  @IsNotEmpty() name: string;
  @IsNotEmpty() description: string;
}

export class UpdateComunicateDto {
  @IsNotEmpty() @IsOptional() name: string;
  @IsNotEmpty() @IsOptional() description: string;
}