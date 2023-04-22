import { DemandUseCases } from "application/usecases/Demand.usecases";
import { Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { AuthenticatedGuard } from "infrastructure/guards/authenticated.guard";
import { isAdminGuard } from "infrastructure/guards/isAdmin.guard";

@Controller('demands')
export class DemandController {
  constructor(private demandUseCases: DemandUseCases) {}

  // Obtem todas as demandas
  @UseGuards(AuthenticatedGuard, isAdminGuard)
  @Get('/')
  // [Guardas]
  async getAllDemands(): Promise<any> {
    return await this.demandUseCases.getAllDemands();
  }

  
  //Autoriza uma demanda
  @UseGuards(AuthenticatedGuard, isAdminGuard)
  @Post('/authorizate/:id')
  // [Guardas]
  async authorizateDemand(@Param('id') id: string): Promise<any> {
    return await this.demandUseCases.authorizate(parseInt(id));
  }

  // Deleta uma demanda
  @UseGuards(AuthenticatedGuard, isAdminGuard)
  // [Guardas]
  @Post('/delete/:id')
  async deleteDemand(@Param('id') id: number): Promise<any> {
    return await this.demandUseCases.deleteDemandById(id);
  }

}