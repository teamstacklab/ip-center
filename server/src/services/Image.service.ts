import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
  HttpException,
  HttpStatus,
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

    return await this.imageRepo.find({ relations: { owner: true } });
  }

  async getOneById(id: number): Promise<Image> {
    this.logger.log(`Get a specific image ${id}.`);
    const image = await this.imageRepo.findOne({
      where: { id },
      loadRelationIds: {
        relations: ['owner'],
        disableMixedMap: true,
      },
    });
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
      throw new HttpException(`${err}`, HttpStatus.BAD_REQUEST);
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
      throw new HttpException(`${err}`, HttpStatus.BAD_REQUEST);
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

  async assureOwnerIsCurrentUser(
    imageId: number,
    userId: number,
  ): Promise<any> {
    const store = await this.getOneById(imageId);
    if (store.owner.id !== userId) {
      throw new ConflictException(`Você não tem acesso a essa imagem!`);
    }

    return true;
  }
}
