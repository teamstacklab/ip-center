import { CreateImageDto, UpdateImageDto } from 'domain/dto/Image.dto';
import { Image } from 'domain/entities/Image.entity';
import { User } from 'domain/entities/User.entity';

export enum ImagesRole {
  Slider = 'slider',
  Shopping = 'shopping',
  Loja = 'loja',
}

export interface IImage {
  id: number;
  url: string;
  owner: User;
  role: ImagesRole;
}

export interface IImageService {
  getAll(): Promise<Image[]>;
  getOneById(id: number): Promise<Image>;
  create(imageDtoList: CreateImageDto[]): Promise<Image[]>;
  update(id: number, update: UpdateImageDto): Promise<Image>;
  delete(id: number): Promise<Image>;
}
