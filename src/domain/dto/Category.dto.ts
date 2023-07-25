import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty() name: string;
  @IsNotEmpty() @IsArray() tags: string[];
}

export class UpdateCategoryDto {
  @IsNotEmpty() @IsOptional() name: string;
  @IsNotEmpty() @IsOptional() @IsArray() tags: string[];
}
