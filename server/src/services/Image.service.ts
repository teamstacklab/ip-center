import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { IImageService } from 'domain/interfaces/IImage';
import { Image } from 'domain/entities/Image.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateImageDto, UpdateImageDto } from 'domain/dto/Image.dto';

@Injectable()
export class ImageService implements IImageService {
  constructor(@InjectRepository(Image) private imageRepo: Repository<Image>) {}

  private readonly logger = new Logger(ImageService.name);

  async getAll(): Promise<Image[]> {
    this.logger.log(`Get all images.`);

    return await this.imageRepo.find();
  }

  async getOneById(id: number): Promise<Image> {
    this.logger.log(`Get a specific image ${id}.`);
    const image = await this.imageRepo.findOneBy({ id });
    if (!image) {
      throw new NotFoundException(`Imagem ${id} não encontrado!`);
    }

    return image;
  }

  async create(imageDto: CreateImageDto): Promise<Image> {
    this.logger.log(`Creating a image.`);
    const image = await this.imageRepo.findOne({
      where: [{ url: imageDto.url }],
    });
    if (image) {
      throw new ConflictException(`Esta Imagem já existe!`);
    }
    try {
      const newImage = this.imageRepo.create(imageDto);
      return await this.imageRepo.save(newImage);
    } catch (err) {
      throw new NotFoundException(`${err.detail}`);
    }
  }

  async update(id: number, update: UpdateImageDto): Promise<Image> {
    this.logger.log(`Get the image of id ${id}.`);
    const image = this.getOneById(id);
    if (!image) {
      throw new NotFoundException(`Imagem ${id} não encontrada!`);
    }
    try {
      await this.imageRepo.update({ id }, { ...update });
      return await this.imageRepo.findOneBy({ id });
    } catch (err) {
      throw new NotFoundException(`${err.detail}`);
    }
  }

  async delete(id: number): Promise<Image> {
    this.logger.log(`Deleting Image ${id}.`);
    const image = this.getOneById(id);
    if (!image) {
      throw new NotFoundException(`Imagem ${id} não encontrada!`);
    }
    await this.imageRepo.delete({ id });

    return image;
  }
}
