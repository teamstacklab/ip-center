import { DemandUseCases } from "application/usecases/Demand.usecases";
import { Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { AuthenticatedGuard } from "infrastructure/guards/authenticated.guard";
import { isAdminGuard } from "infrastructure/guards/isAdmin.guard";

@Controller('api/demands')
export class DemandController {
  constructor(private readonly demandUseCases: DemandUseCases) {}

  // --> Pega todas as demandas
  @Post('/')
  // @UseGuards(AuthenticatedGuard, isAdminGuard)
  async getAllDemands(): Promise<any> {
    return await this.demandUseCases.getAllDemands();
  }

  
  // --> Autoriza uma demanda
  @Post('/authorizate/:id')
  // @UseGuards(AuthenticatedGuard, isAdminGuard)
  async authorizateDemand(@Param('id') id: string): Promise<any> {
    return await this.demandUseCases.authorizate(+id);
  }


  
  // --> Rejeita uma demanda
  @Post('/reject/:id')
  // @UseGuards(AuthenticatedGuard, isAdminGuard)
  async rejectDemand(@Param('id') id: string): Promise<any> {
    return await this.demandUseCases.deleteDemandById(+id);
  }

}