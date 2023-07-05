import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ComunicateService } from "services/Comunicate.service";
import { CreateComunicateDto, UpdateComunicateDto } from "domain/dto/Comunicate.dto";
import { Comunicate } from "domain/entities/Comunicate.entity";


@Controller('api/comunicates')
export class ComunicateController {
  constructor(
    private readonly comunicateService: ComunicateService,
  ) { }

  //Get all comunicates
  @Get('/find')
  async getAll(): Promise<Comunicate[]> {
    return await this.comunicateService.getAll();
  }

  //Get a comunicate by id
  @Get('/find/:id')
  async getOneById(@Param('id') id: string): Promise<Comunicate> {
    return await this.comunicateService.getOneById(+id);
  }

  //Create a comunicate
  @Post('/create')
  async create(@Body() comunicate: CreateComunicateDto): Promise<Comunicate> {
    return await this.comunicateService.create(comunicate);
  }

  //Update a comunicate
  @Post('/update/:id')
  async update(@Param('id') id: string, update: UpdateComunicateDto): Promise<Comunicate> {
    return await this.comunicateService.update(+id, update);
  }

  //Delete a comunicate
  @Post('/delete/:id')
  async delete(@Param('id') id: number): Promise<Comunicate> {
    return await this.comunicateService.delete(+id);
  }
}