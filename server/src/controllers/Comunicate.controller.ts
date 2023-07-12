import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ComunicateService } from 'services/Comunicate.service';
import { Comunicate } from 'domain/entities/Comunicate.entity';
import { RolesGuard } from 'infra/guards/Roles/roles.guard';
import { UseGuards } from '@nestjs/common';
import { JwtAccessAuthGuard } from 'infra/guards/Auth/jwt-access.guard';
import {
  CreateComunicateDto,
  UpdateComunicateDto,
} from 'domain/dto/Comunicate.dto';

@Controller('api/comunicates')
export class ComunicateController {
  constructor(private readonly comunicateService: ComunicateService) {}

  @Get('/find')
  async getAll(): Promise<Comunicate[]> {
    return await this.comunicateService.getAll();
  }

  @Get('/find/:id')
  async getOneById(@Param('id') id: string): Promise<Comunicate> {
    return await this.comunicateService.getOneById(+id);
  }

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/create')
  async create(@Body() comunicate: CreateComunicateDto): Promise<Comunicate> {
    return await this.comunicateService.create(comunicate);
  }

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() update: UpdateComunicateDto,
  ): Promise<Comunicate> {
    return await this.comunicateService.update(+id, update);
  }

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/delete/:id')
  async delete(@Param('id') id: number): Promise<Comunicate> {
    return await this.comunicateService.delete(+id);
  }
}
