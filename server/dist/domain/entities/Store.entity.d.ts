import { IStore } from 'domain/interfaces/IStore';
import { User } from './User.entity';
import { Category } from './Category.entity';
import { Image } from './Image.entity';
export declare class Store implements IStore {
    id: number;
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
    additionalInfo: string;
    createdAt: Date;
    updatedAt: Date;
}
