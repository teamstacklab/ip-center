import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateLojaDto } from "application/dto/Loja/createLoja.dto";
import { LojaUseCases } from "application/usecases/Loja.usecases";
import { AuthenticatedGuard } from "infrastructure/guards/authenticated.guard";

@Controller('lojas')
export class LojaController {
  constructor(private readonly lojasUseCases: LojaUseCases) { }

  // Retorna todas as lojas
  @Get('/')
  async getAll(): Promise<any> {
    return this.lojasUseCases.getAllLojas();
  }

  // Retorna apenas uma loja
  @Get('/:id')
  async getById(@Param('id') id: number): Promise<any> {
    return await this.lojasUseCases.getLojaById(id)
  }

  // Cria uma loja
  @Post('/create')
  async createLoja(@Body() loja: CreateLojaDto): Promise<any> {
    return await this.lojasUseCases.createLoja(loja);
  }

  // Deleta uma loja
  @Post('/delete/:id')
  async deleteLoja(@Param('id') id: number): Promise<any> {
    return await this.lojasUseCases.deleteLoja(id);
  }
}
