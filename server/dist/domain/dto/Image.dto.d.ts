import { User } from 'domain/entities/User.entity';
import { ImagesRole } from 'domain/interfaces/IImage';
export declare class CreateImageDto {
    url: string;
    owner: User;
    role: ImagesRole;
}
export declare class UploadImageDto {
    role: ImagesRole;
}
export declare class UpdateImageDto {
    url?: string;
    role?: ImagesRole;
}
