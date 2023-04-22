import { IsNotEmpty, IsArray } from "class-validator";

export class CreateCategoryDto {
  @IsNotEmpty()
  name: string;
  
  @IsNotEmpty() @IsArray()
  tags: string[];
}