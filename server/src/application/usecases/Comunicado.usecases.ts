import { Injectable, Logger, NotFoundException, ConflictException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Comunicado } from "domain/models/Comunicado.entity";
import { CreateComunicadoDto } from "application/dto/Comunicado/createComunicado.dto";
import { UpdateComunicadoDto } from "application/dto/Comunicado/updateComunicado.dto";
import { Repository } from "typeorm";


@Injectable()
export class ComunicadoUseCases {
  constructor(
    @InjectRepository(Comunicado) private comunicadoRepository: Repository<Comunicado>
  ) { }

  private readonly logger = new Logger(ComunicadoUseCases.name)


  // --> Pega todos os comunicados
  async getAllComunicados(): Promise<Comunicado[]> {
    this.logger.log("Get all comunicados")
    return this.comunicadoRepository.find();
  }


  // --> Pega um comunicado pelo id
  async getComunicadoById(id: number): Promise<Comunicado> {
    const comunicado = await this.comunicadoRepository.findOneBy({ id });
    if (!comunicado) {
      throw new NotFoundException(`Comunicado de id: ${id} não existe!`)
    }
    return comunicado;
  }


  // --> Cria um comunicado
  async createComunicado(comunicadoDto: CreateComunicadoDto): Promise<Comunicado> {
    this.logger.log(`Creating an comunicado`);

    const existingComunicado = await this.comunicadoRepository.findOneBy({ name: comunicadoDto.name });

    if (existingComunicado) {
      throw new ConflictException(`Um comunicadoo de nome: ${comunicadoDto.name} já existe!`)
    }

    const comunicado = this.comunicadoRepository.create(comunicadoDto);

    await this.comunicadoRepository.save(comunicado);

    return comunicado;
  }


  // --> Atualiza um comunicado
  async updateComunicado(id: number, comunicadoDto: UpdateComunicadoDto): Promise<Comunicado> {
    this.logger.log(`Updating comunicado of id: ${id}`);

    await this.getComunicadoById(id);

    if (Object.values(comunicadoDto).length == 0) {
      throw new InternalServerErrorException(`Preencha ao menos um: { name, description }`);
    }

    await this.comunicadoRepository.update({ id }, { ...comunicadoDto });

    return await this.getComunicadoById(id);
  }


  // --> Deleta um comunicado pelo id
  async deleteComunicado(id: number): Promise<Comunicado> {
    this.logger.log(`Deleting comunicado of id: ${id}`);

    const comunicado = await this.getComunicadoById(id);
    await this.comunicadoRepository.delete({ id });

    return comunicado;
  }
}