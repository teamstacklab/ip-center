import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Demand } from '../domain/entities/Demand.entity';
import { CreateDemandDto } from '../domain/dto/Demand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { UserService } from '../services/User.service';
import { IDemandService } from '../domain/interfaces/IDemand';

@Injectable()
export class DemandService implements IDemandService {
  constructor(
    @InjectRepository(Demand) private demandRepo: Repository<Demand>,
    private readonly userService: UserService,
  ) {}

  private readonly logger = new Logger(DemandService.name);

  async getAll(): Promise<Demand[]> {
    this.logger.log(`Get all demands`);

    return this.demandRepo.find();
  }

  async getOneById(id: number): Promise<Demand> {
    this.logger.log(`Get demand ${id}`);
    const demand = await this.demandRepo.findOneBy({ id });
    if (!demand) {
      throw new NotFoundException(`Demanda ${id} não encontrada!`);
    }

    return demand;
  }

  async create(demandDto: CreateDemandDto): Promise<Demand> {
    this.logger.log(`Creating a demand.`);
    const demand = await this.demandRepo.findOne({
      where: [
        { username: demandDto.username },
        { email: demandDto.email },
        { cpf: demandDto.cpf },
      ],
    });
    if (demand) {
      throw new ConflictException(
        `Demanda ou usuário com este email ou username já existe`,
      );
    }
    const newDemand = this.demandRepo.create(demand);

    return await this.demandRepo.save(newDemand);
  }

  async authorizate(id: number): Promise<any> {
    const demand = await this.getOneById(id);
    if (!demand) {
      throw new NotFoundException(`Demanda ${id} não encontrada!`);
    }
    await this.userService.create(demand);
    await this.demandRepo.delete(demand);

    return { message: 'Usuário autorizado com sucesso!' };
  }

  async reject(id: number): Promise<any> {
    const demand = await this.getOneById(id);
    if (!demand) {
      throw new NotFoundException(`Demanda ${id} não encontrada!`);
    }
    await this.demandRepo.delete(demand);

    return { message: 'Usuário rejeitado com sucesso!' };
  }
}
