import { IImageService } from 'domain/interfaces/IImage';
import { Image } from 'domain/entities/Image.entity';
import { Repository } from 'typeorm';
import { CreateImageDto, UpdateImageDto } from 'domain/dto/Image.dto';
import { ConfigService } from '@nestjs/config';
export declare class ImageService implements IImageService {
    private imageRepo;
    private readonly env;
    constructor(imageRepo: Repository<Image>, env: ConfigService);
    private readonly logger;
    getAll(): Promise<Image[]>;
    getOneById(id: number): Promise<Image>;
    create(imageDtoList: CreateImageDto[]): Promise<Image[]>;
    update(id: number, update: UpdateImageDto): Promise<Image>;
    delete(id: number): Promise<Image>;
    assureOwnerIsCurrentUser(imageId: number, userId: number): Promise<any>;
    deleteImage(imageName: string): any;
}
