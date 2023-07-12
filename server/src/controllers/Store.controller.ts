import { StoreService } from 'services/Store.service';
import { CreateStoreDto, UpdateStoreDto } from 'domain/dto/Store.dto';
import { Store } from 'domain/entities/Store.entity';
import { JwtAccessAuthGuard } from 'infra/guards/Auth/jwt-access.guard';

import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';

@Controller('api/stores')
export class StoreController {
  constructor(private readonly storesService: StoreService) {}

  @Get('/find')
  async getAll(): Promise<Store[]> {
    return await this.storesService.getAll();
  }

  @Get('/find/:id')
  async getOneById(@Param('id') id: string): Promise<Store> {
    return await this.storesService.getOneById(+id);
  }

  @UseGuards(JwtAccessAuthGuard)
  @Post('/create')
  async create(@Body() store: CreateStoreDto): Promise<Store> {
    return await this.storesService.create(store);
  }

  @UseGuards(JwtAccessAuthGuard)
  @Post('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() storeDto: UpdateStoreDto,
  ): Promise<Store> {
    return await this.storesService.update(+id, storeDto);
  }

  @UseGuards(JwtAccessAuthGuard)
  @Post('/delete/:id')
  async delete(@Param('id') id: string): Promise<Store> {
    return await this.storesService.delete(+id);
  }
}
