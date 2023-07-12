import { IsNotEmpty, IsOptional, IsArray } from 'class-validator';
import { Category } from 'domain/entities/Category.entity';
import { User } from 'domain/entities/User.entity';

export class CreateStoreDto {
  @IsNotEmpty() owner: User;
  @IsNotEmpty() category: Category;
  @IsNotEmpty() name: string;
  @IsNotEmpty() slogan: string;
  @IsNotEmpty() images: string[];
  @IsNotEmpty() description: string;
  @IsNotEmpty() instagram: string;
  @IsNotEmpty() whatsapp: string;
  @IsNotEmpty() location: string;
  @IsNotEmpty() services: string;
  additionalInfo: string;
}

export class UpdateStoreDto {
  @IsNotEmpty() @IsOptional() name: string;
  @IsNotEmpty() @IsOptional() slogan: string;
  @IsNotEmpty() @IsOptional() @IsArray() images: string[];
  @IsNotEmpty() @IsOptional() description: string;
  @IsNotEmpty() @IsOptional() instagram: string;
  @IsNotEmpty() @IsOptional() whatsapp: string;
  @IsNotEmpty() @IsOptional() location: string;
  @IsNotEmpty() @IsOptional() services: string;
  @IsNotEmpty() @IsOptional() category: Category;
  @IsOptional() additionalInfo: string;
}

export class PartialStoreDto {
  id?: number;
  name?: string;
  slogan?: string;
  description?: string;
  instagram?: string;
  whatsapp?: string;
  location?: string;
  services?: string;
  additionalInfo?: string;
}
