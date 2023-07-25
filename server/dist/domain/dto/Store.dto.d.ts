import { Category } from 'domain/entities/Category.entity';
import { Image } from 'domain/entities/Image.entity';
import { User } from 'domain/entities/User.entity';
export declare class CreateStoreDto {
    owner: User;
    category: Category;
    name: string;
    slogan: string;
    logo: Image;
    images: Image[];
    description: string;
    instagram: string;
    whatsapp: string;
    location: string;
    services: string;
}
export declare class UpdateStoreDto {
    name?: string;
    slogan?: string;
    logo: Image;
    images?: Image[];
    description?: string;
    instagram?: string;
    whatsapp?: string;
    location?: string;
    services?: string;
    category?: Category;
}
