import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateComunicadoDto } from "application/dto/Comunicado/createComunicado.dto";
import { ComunicadoUseCases } from "application/usecases/Comunicado.usecases";

@Controller('comunicados')
export class ComunicadoController {
  constructor(private readonly comunicadoUseCases: ComunicadoUseCases) {}

  // Pega todos os comunicados
  @Get('/')
  async getAllComunicados(): Promise<any> {
    return await this.comunicadoUseCases.getAllComunicados();
  }

  // Pega um comunicado pelo id
  @Get('/:id')
  async getComunicadoById(@Param('id') id: number): Promise<any> {
    return await this.comunicadoUseCases.getComunicadoById(id);
  }

  // Cria um comunicado
  @Post('/create')
  async createComunicado(@Body() comunicado: CreateComunicadoDto): Promise<any> {
    return await this.comunicadoUseCases.createComunicado(comunicado);
  }

  // Deleta um comunicado
  @Post('/delete/:id')
  async deleteComunicado(@Param('id') id: number): Promise<any> {
    return await this.comunicadoUseCases.deleteComunicado(id);
  }
}