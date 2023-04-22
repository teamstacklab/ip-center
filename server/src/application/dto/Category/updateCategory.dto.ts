import { IsArray, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateCategoryDto {
  @IsNotEmpty() @IsOptional()
  name: string;
  @IsNotEmpty() @IsOptional() @IsArray()
  tags: string[];
}