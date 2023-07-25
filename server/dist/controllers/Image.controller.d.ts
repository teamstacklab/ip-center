/// <reference types="multer" />
import { ImageService } from 'services/Image.service';
import { Image } from 'domain/entities/Image.entity';
import { UpdateImageDto, UploadImageDto } from 'domain/dto/Image.dto';
import { Request, Response } from 'express';
export declare class ImageController {
    private readonly imageService;
    constructor(imageService: ImageService);
    getAll(): Promise<Image[]>;
    getOneById(id: string): Promise<Image>;
    upload(req: Request, imageDto: UploadImageDto, images: Array<Express.Multer.File>): Promise<any>;
    show(imageName: string, res: Response): Promise<any>;
    update(req: Request, id: string, imageDto: UpdateImageDto): Promise<Image>;
    delete(req: Request, id: string): Promise<Image>;
}
