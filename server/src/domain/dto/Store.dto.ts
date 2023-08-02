import { IsNotEmpty, IsOptional, IsArray } from 'class-validator';
import { Category } from '../entities/Category.entity';
import { Image } from '../entities/Image.entity';
import { User } from '../entities/User.entity';

export class CreateStoreDto {
  @IsNotEmpty() owner: User;
  category: Category;
  @IsNotEmpty() name: string;
  @IsNotEmpty() slogan: string;
  @IsNotEmpty() logo: Image;
  @IsNotEmpty() @IsArray() images: Image[];
  @IsNotEmpty() description: string;
  @IsNotEmpty() instagram: string;
  @IsNotEmpty() whatsapp: string;
  @IsNotEmpty() location: string;
  @IsNotEmpty() services: string;
}

export class UpdateStoreDto {
  @IsNotEmpty() @IsOptional() name?: string;
  @IsNotEmpty() @IsOptional() slogan?: string;
  @IsNotEmpty() @IsOptional() logo: Image;
  @IsOptional() @IsArray() images?: Image[];
  @IsNotEmpty() @IsOptional() description?: string;
  @IsNotEmpty() @IsOptional() instagram?: string;
  @IsNotEmpty() @IsOptional() whatsapp?: string;
  @IsNotEmpty() @IsOptional() location?: string;
  @IsNotEmpty() @IsOptional() services?: string;
  @IsNotEmpty() @IsOptional() category?: Category;
}
