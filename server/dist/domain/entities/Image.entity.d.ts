import { IImage, ImagesRole } from 'domain/interfaces/IImage';
import { User } from './User.entity';
export declare class Image implements IImage {
    id: number;
    url: string;
    owner: User;
    role: ImagesRole;
}
