import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IsAdminGuard } from 'infra/guards/Roles/is-admin.guard';
import { UseGuards } from '@nestjs/common';
import { JwtAccessAuthGuard } from 'infra/guards/Auth/jwt-access.guard';
import { ImageService } from 'services/Image.service';
import { Image } from 'domain/entities/Image.entity';
import { CreateImageDto, UpdateImageDto } from 'domain/dto/Image.dto';

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
  @Post('/create')
  async create(@Body() event: CreateImageDto): Promise<Image> {
    return await this.imageService.create(event);
  }

  @UseGuards(JwtAccessAuthGuard, IsAdminGuard)
  @Post('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() imageDto: UpdateImageDto,
  ): Promise<Image> {
    return await this.imageService.update(+id, imageDto);
  }

  @UseGuards(JwtAccessAuthGuard, IsAdminGuard)
  @Post('/delete/:id')
  async delete(@Param('id') id: string): Promise<Image> {
    return await this.imageService.delete(+id);
  }
}
