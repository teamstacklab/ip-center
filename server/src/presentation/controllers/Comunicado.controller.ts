import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateComunicadoDto } from "application/dto/Comunicado/createComunicado.dto";
import { UpdateComunicadoDto } from "application/dto/Comunicado/updateComunicado.dto";
import { ComunicadoUseCases } from "application/usecases/Comunicado.usecases";
import { Comunicado } from "domain/models/Comunicado.entity";

@Controller('api/comunicates')
export class ComunicadoController {
  constructor(private readonly comunicadoUseCases: ComunicadoUseCases) {}

  // --> Pega todos os comunicados
  @Get('/')
  async getAllComunicados(): Promise<Comunicado[]> {
    return await this.comunicadoUseCases.getAllComunicados();
  }

  // --> Pega um comunicado pelo id
  @Get('/find/:id')
  async getComunicadoById(@Param('id') id: number): Promise<Comunicado> {
    return await this.comunicadoUseCases.getComunicadoById(id);
  }

  // --> Cria um comunicado
  @Post('/create')
  async createComunicado(@Body() comunicado: CreateComunicadoDto): Promise<Comunicado> {
    return await this.comunicadoUseCases.createComunicado(comunicado);
  }

  //  --> Deleta um comunicado
  @Post('/update/:id')
  async updateComunicado(@Param('id') id: string, comunicadoDto: UpdateComunicadoDto): Promise<Comunicado> {
    return await this.comunicadoUseCases.updateComunicado(+id, comunicadoDto);
  }

  //  --> Deleta um comunicado
  @Post('/delete/:id')
  async deleteComunicado(@Param('id') id: number): Promise<Comunicado> {
    return await this.comunicadoUseCases.deleteComunicado(id);
  }
}