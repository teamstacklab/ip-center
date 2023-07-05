import { ConflictException, Injectable, InternalServerErrorException, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateLojaDto } from "application/dto/Loja/createLoja.dto";
import { UpdateLojaDto } from "application/dto/Loja/updateLoja.dto";
import { Loja } from "domain/models/Loja.entity";
import { Repository } from "typeorm";


@Injectable()
export class LojaUseCases {
  constructor(
    @InjectRepository(Loja) private lojaRepository: Repository<Loja>,
  ) { }

  private readonly logger = new Logger(LojaUseCases.name);


  // --> Pega todas as lojas
  async getAllLojas(): Promise<Loja[]> {
    this.logger.log("Get all the stores")
    return await this.lojaRepository.find()
  }


  // --> Pega uma loja pelo ID
  async getLojaById(id: number): Promise<Loja> {
    this.logger.log(`Get the store with given id: ${id}`)

    const loja = await this.lojaRepository.findOneBy({ id });
    if (!loja) {
      throw new NotFoundException(`Loja de id: ${id} não existe!`);
    }

    return loja;
  }


  // --> Cria uma loja
  async createLoja(lojaDto: CreateLojaDto): Promise<Loja> {
    this.logger.log(`Creating a store with values: ${lojaDto}`);

    const existingLoja = await this.lojaRepository.findOneBy({ name: lojaDto.name });
    if (existingLoja) {
      throw new ConflictException(`Uma loja com nome ${existingLoja.name} já existe!`);
    }
    const loja = this.lojaRepository.create(lojaDto)
    await this.lojaRepository.save(loja)

    return loja;
  }


  // --> Atualiza uma loja
  async updateLoja(id: number, lojaDto: UpdateLojaDto): Promise<Loja> {
    this.logger.log(`Updating a loja of Id: ${id}.`)

    await this.getLojaById(id);

    if (Object.values(lojaDto).length == 0) {
      throw new InternalServerErrorException(`Informe ao menos um: {name, slogan, description, instagram, whatsapp, images, location, services, category, additionalInfo}`)
    }

    await this.lojaRepository.update({id}, {...lojaDto});

    return this.getLojaById(id);;
  }


  // --> Deleta uma loja
  async deleteLoja(id: number): Promise<Loja> {
    const loja = await this.getLojaById(id);
    await this.lojaRepository.delete({ id });
    return loja;
  }

}