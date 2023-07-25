import { Controller, Param, Post } from '@nestjs/common';
import { Demand } from 'domain/entities/Demand.entity';
import { DemandService } from 'services/Demand.service';
import { IsAdminGuard } from 'infra/guards/Roles/is-admin.guard';
import { UseGuards } from '@nestjs/common';
import { JwtAccessAuthGuard } from 'infra/guards/Auth/jwt-access.guard';

@Controller('api/demands')
export class DemandController {
  constructor(private readonly demandService: DemandService) {}

  @UseGuards(JwtAccessAuthGuard, IsAdminGuard)
  @Post('/find')
  async getAll(): Promise<Demand[]> {
    return await this.demandService.getAll();
  }

  @UseGuards(JwtAccessAuthGuard, IsAdminGuard)
  @Post('/find/:id')
  async getOneById(@Param('id') id: string): Promise<Demand> {
    return await this.demandService.getOneById(+id);
  }

  @UseGuards(JwtAccessAuthGuard, IsAdminGuard)
  @Post('/authorizate/:id')
  async authorizate(@Param('id') id: string): Promise<any> {
    return await this.demandService.authorizate(+id);
  }

  @UseGuards(JwtAccessAuthGuard, IsAdminGuard)
  @Post('/reject/:id')
  async reject(@Param('id') id: string): Promise<any> {
    return await this.demandService.reject(+id);
  }
}
