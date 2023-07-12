import { Controller, Param, Post } from '@nestjs/common';
import { Demand } from 'domain/entities/Demand.entity';
import { DemandService } from 'services/Demand.service';
import { RolesGuard } from 'infra/guards/Roles/roles.guard';
import { UseGuards } from '@nestjs/common';
import { JwtAccessAuthGuard } from 'infra/guards/Auth/jwt-access.guard';

@Controller('api/demands')
export class DemandController {
  constructor(private readonly demandService: DemandService) {}

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/find')
  async getAll(): Promise<Demand[]> {
    return await this.demandService.getAll();
  }

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/find/:id')
  async getOneById(@Param('id') id: string): Promise<Demand> {
    return await this.demandService.getOneById(+id);
  }

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/authorizate/:id')
  async authorizate(@Param('id') id: string): Promise<any> {
    return await this.demandService.authorizate(+id);
  }

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/reject/:id')
  async reject(@Param('id') id: string): Promise<any> {
    return await this.demandService.reject(+id);
  }
}
