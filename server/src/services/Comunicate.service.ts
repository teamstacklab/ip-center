import { Injectable, Logger, NotFoundException, ConflictException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Comunicate } from "domain/entities/Comunicate.entity";
import { CreateComunicateDto, UpdateComunicateDto } from "domain/dto/Comunicate.dto";
import { Repository } from "typeorm";
import { IComunicateService } from "domain/interfaces/IComunicate";


@Injectable()
export class ComunicateService implements IComunicateService {
  constructor(
    @InjectRepository(Comunicate) private comunicateRepo: Repository<Comunicate>,
  ) { }

  private readonly logger = new Logger(ComunicateService.name)
  
  //Get all comunicates
  async getAll(): Promise<Comunicate[]> {
    this.logger.log("Get all Comunicates");
    return this.comunicateRepo.find();
  }

  //Get a comunicate by id
  async getOneById(id: number): Promise<Comunicate> {
    const comunicate = await this.comunicateRepo.findOneBy({ id });
    if (!comunicate) {
      throw new NotFoundException(`Comunicado ${id} não existe!`);
    }
    return comunicate;
  }

  //Create a comunicate
  async create(comunicateDto: CreateComunicateDto): Promise<Comunicate> {
    this.logger.log(`Creating comunicate.`);

    const comunicate = await this.comunicateRepo.findOneBy({ name: comunicateDto.name });

    if (comunicate) {
      throw new ConflictException(`Um Comunicado '${comunicate.name}' já existe!`);
    }

    const newComunicate = this.comunicateRepo.create(comunicate);

    return await this.comunicateRepo.save(newComunicate);
  }

  //Update a comunicate
  async update(id: number, update: UpdateComunicateDto): Promise<Comunicate> {
    this.logger.log(`Updating comunicate ${id}.`);

    await this.getOneById(id);
    await this.comunicateRepo.update({id}, {...update})

    return await this.getOneById(id);
  }
  
  //Delete a comunicate
  async delete(id: number): Promise<Comunicate> {
    this.logger.log(`Deleting comunicate ${id}.`);

    const comunicate = await this.getOneById(id);
    await this.comunicateRepo.delete({ id });

    return comunicate;
  }
}