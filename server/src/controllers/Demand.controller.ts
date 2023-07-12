import { Controller, Param, Post } from "@nestjs/common";
import { Demand } from "domain/entities/Demand.entity";
import { DemandService } from "services/Demand.service";


@Controller('api/demands')
export class DemandController {
  constructor(
    private readonly demandService: DemandService,
  ) { }

  //Get all demands
  @Post('/find')
  async getAll(): Promise<Demand[]> {
    return await this.demandService.getAll();
  }

  //Get a demand by id
  @Post('/find/:id')
  async getOneById(@Param('id') id: string): Promise<Demand> {
    return await this.demandService.getOneById(+id)
  }

  //Authorizate a demand
  @Post('/authorizate/:id')
  async authorizate(@Param('id') id: string): Promise<Object> {
    return await this.demandService.authorizate(+id);
  }

  //Reject a demand
  @Post('/reject/:id')
  async reject(@Param('id') id: string): Promise<Object> {
    return await this.demandService.reject(+id);
  }

}