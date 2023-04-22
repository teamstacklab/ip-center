import { IsArray, IsNotEmpty, IsOptional } from "class-validator";
import { Category } from "domain/models/Category.entity";


export class UpdateLojaDto {
  // -- Info da página
  @IsNotEmpty() @IsOptional()
  name: string;

  @IsNotEmpty() @IsOptional()
  slogan: string;

  @IsNotEmpty() @IsOptional() @IsArray()
  images: string[];

  @IsNotEmpty() @IsOptional()
  description: string;

  // -- Sobre
  @IsNotEmpty() @IsOptional()
  instagram: string;

  @IsNotEmpty() @IsOptional()
  whatsapp: string;

  @IsNotEmpty() @IsOptional()
  location: string;

  @IsNotEmpty() @IsOptional()
  services: string;

  @IsNotEmpty() @IsOptional()
  category: Category;

  @IsOptional()
  additionalInfo: string;
}