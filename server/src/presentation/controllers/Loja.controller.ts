import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateLojaDto } from "application/dto/Loja/createLoja.dto";
import { LojaUseCases } from "application/usecases/Loja.usecases";
import { UpdateLojaDto } from "application/dto/Loja/updateLoja.dto";
import { Loja } from "domain/models/Loja.entity";


@Controller('api/lojas')
export class LojaController {
  constructor(private readonly lojasUseCases: LojaUseCases) { }

  // --> Retorna todas as lojas
  @Get('/')
  async getAll(): Promise<Loja[]> {
    return this.lojasUseCases.getAllLojas();
  }

  // --> Retorna apenas uma loja
  @Get('/find/:id')
  async getById(@Param('id') id: string): Promise<Loja> {
    return await this.lojasUseCases.getLojaById(+id)
  }

  // --> Cria uma loja
  @Post('/create')
  async createLoja(@Body() loja: CreateLojaDto): Promise<Loja> {
    return await this.lojasUseCases.createLoja(loja);
  }

  // --> Deleta uma loja
  @Post('/update/:id')
  async updateLoja(@Param('id') id: string, lojaDto: UpdateLojaDto): Promise<Loja> {
    return await this.lojasUseCases.updateLoja(+id, lojaDto);
  }

  // --> Deleta uma loja
  @Post('/delete/:id')
  async deleteLoja(@Param('id') id: string): Promise<Loja> {
    return await this.lojasUseCases.deleteLoja(+id);
  }
}
