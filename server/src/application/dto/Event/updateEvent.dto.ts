import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateEventDto {
  @IsOptional() @IsNotEmpty()
  name: string;

  @IsOptional() @IsNotEmpty()
  initialDate: Date;

  @IsOptional() @IsNotEmpty()
  finalDate: Date;
}