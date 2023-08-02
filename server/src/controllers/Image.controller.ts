import {
  BadRequestException,
  Body,
  Controller,
  FileTypeValidator,
  Get,
  HttpStatus,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Req,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { IsAdminGuard } from '../infra/guards/Roles/is-admin.guard';
import { UseGuards } from '@nestjs/common';
import { JwtAccessAuthGuard } from '../infra/guards/Auth/jwt-access.guard';
import { ImageService } from '../services/Image.service';
import { Image } from '../domain/entities/Image.entity';
import {
  CreateImageDto,
  UpdateImageDto,
  UploadImageDto,
} from '../domain/dto/Image.dto';
import { Request, Response } from 'express';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ConfigService } from '@nestjs/config';
import { generateRandomFileName } from '../utils/files.util';

const env: ConfigService = new ConfigService();

@Controller('api/images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get('/find')
  async getAll(): Promise<Image[]> {
    return await this.imageService.getAll();
  }

  @Get('/find/:id')
  async getOneById(@Param('id') id: string): Promise<Image> {
    return await this.imageService.getOneById(+id);
  }

  @UseGuards(JwtAccessAuthGuard, IsAdminGuard)
  @UseInterceptors(
    FilesInterceptor('image', 5, {
      storage: diskStorage({
        destination: (req, file, cb) => {
          cb(null, env.get('IMAGES_DEST'));
        },
        filename: (req, file, cb) => {
          cb(null, generateRandomFileName(file.originalname));
        },
      }),
    }),
  )
  @Post('/upload')
  async upload(
    @Req() req: Request,
    @Body() imageDto: UploadImageDto,
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 10 }),
          new FileTypeValidator({
            fileType: /image\/(jpg|jpeg|png|gif|tiff)$/,
          }),
        ],
      }),
    )
    images: Array<Express.Multer.File>,
  ): Promise<any> {
    const imagesList = [];
    images.forEach((image) => {
      const imageObject: CreateImageDto = {
        url: image.filename,
        owner: req.user['sub'],
        role: imageDto.role,
      };
      imagesList.push(imageObject);
    });

    return await this.imageService.create(imagesList);
  }

  @Get('/show/:imgname')
  async show(
    @Param('imgname') imageName: string,
    @Res() res: Response,
  ): Promise<any> {
    return res.sendFile(imageName, { root: env.get('IMAGES_DEST') });
  }

  @UseGuards(JwtAccessAuthGuard, IsAdminGuard)
  @Post('/update/:id')
  async update(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() imageDto: UpdateImageDto,
  ): Promise<Image> {
    let ownerIsCurrentUser = true;
    if (!req.user['isAdmin']) {
      try {
        ownerIsCurrentUser = await this.imageService.assureOwnerIsCurrentUser(
          +id,
          req.user['sub'],
        );
      } catch (err) {
        throw err;
      }
    }
    if (ownerIsCurrentUser) {
      return await this.imageService.update(+id, imageDto);
    }
  }

  @UseGuards(JwtAccessAuthGuard, IsAdminGuard)
  @Post('/delete/:id')
  async delete(@Req() req: Request, @Param('id') id: string): Promise<Image> {
    let ownerIsCurrentUser = true;
    if (!req.user['isAdmin']) {
      try {
        ownerIsCurrentUser = await this.imageService.assureOwnerIsCurrentUser(
          +id,
          req.user['sub'],
        );
      } catch (err) {
        throw err;
      }
    }
    if (ownerIsCurrentUser) {
      return await this.imageService.delete(+id);
    }
  }
}
