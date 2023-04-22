import { IsNotEmpty } from "class-validator";
import { Category } from "domain/models/Category.entity";
import { User } from "domain/models/User.entity";

export class CreateLojaDto {
  @IsNotEmpty() owner: User;
  // Info da página
  @IsNotEmpty() name: string;
  @IsNotEmpty() slogan: string;
  @IsNotEmpty() images: string[];
  @IsNotEmpty() description: string;

  // -- Sobre
  @IsNotEmpty() instagram: string;
  @IsNotEmpty() whatsapp: string;
  @IsNotEmpty() location: string;
  @IsNotEmpty() services: string;
  @IsNotEmpty() category: Category;
  additionalInfo: string;
}