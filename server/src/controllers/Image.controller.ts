import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { IsAdminGuard } from 'infra/guards/Roles/is-admin.guard';
import { UseGuards } from '@nestjs/common';
import { JwtAccessAuthGuard } from 'infra/guards/Auth/jwt-access.guard';
import { ImageService } from 'services/Image.service';
import { Image } from 'domain/entities/Image.entity';
import { CreateImageDto, UpdateImageDto } from 'domain/dto/Image.dto';
import { Request } from 'express';

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
    @Req() req: Request,
    @Param('id') id: string,
    @Body() imageDto: UpdateImageDto,
  ): Promise<Image> {
    let ownerIsCurrentUser: boolean = true;
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
    let ownerIsCurrentUser: boolean = true;
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
