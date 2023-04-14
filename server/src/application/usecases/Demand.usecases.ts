import { ConflictException, InternalServerErrorException, Injectable, NotFoundException } from "@nestjs/common";
import { Demand } from "domain/models/Demand.entity";
import { CreateDemandDto } from "application/dto/Demand/createDemand.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PartialDemandDto } from "application/dto/Demand/partialDemand.dto";
import { UserUseCases } from "./User.usecases";
import { EncryptionAdapter } from "application/adapters/Encryption.adapter";
import { Logger } from "@nestjs/common";


@Injectable()
export class DemandUseCases {
  constructor(
    @InjectRepository(Demand) private demandRepository: Repository<Demand>,
    private userUseCases: UserUseCases,
    private readonly encryption: EncryptionAdapter,
  ) { }

  private readonly logger = new Logger(UserUseCases.name);

  // Seleciona todas as demandas
  async getAllDemands(): Promise<Demand[]> {
    this.logger.log("Get all demands")

    return this.demandRepository.find();
  }

  // Cria uma nova demanda de registro
  async createDemand(demandDto: CreateDemandDto): Promise<Demand> {
    this.logger.log("Creating a demand")
    const {
      email,
      username,
      name,
      password,
      loja,
      cpf
    } = demandDto;

    if (!email || !username || !name || !password || !loja || !cpf) {
      const error = `Informações insufucuentes. Demand = { email, username, name, password, loja }`
      throw new InternalServerErrorException(error);
    }

    const existingDemand = {
      byUsername: await this.getDemandBy({ username }),
      byEmail: await this.getDemandBy({ email }),
      byUserUsername: await this.userUseCases.getUserBy({ username }),
      byUserEmail: await this.userUseCases.getUserBy({ username }),
    };

    if (
      existingDemand.byEmail,
      existingDemand.byEmail,
      existingDemand.byUserUsername,
      existingDemand.byUserEmail
    ) {
      throw new ConflictException(`Demanda já existente!`)
    }

    const hashPass = await this.encryption.hash(password);

    const demand = this.demandRepository.create({
      password: hashPass,
      email,
      cpf,
      username,
      name,
      loja,
    });

    //Cria a demanda em si
    await this.demandRepository.save(demand);

    return demand;
  }

  async authorizate(id: number): Promise<any> {
    const demand = await this.getDemandById(id);
    const { cpf, loja, ...partialDemand } = demand;
    const user = await this.userUseCases.createUser({
      ...partialDemand,
      isAdmin: false
    });

    await this.deleteDemandById(id);

    return user;
  }

  async getDemandById(id: number): Promise<Demand> {
    this.logger.log(`Get demand by id: ${id}`)

    const demand = await this.demandRepository.findOneBy({ id });

    if (!demand) {
      throw new NotFoundException("Demanda não encontrada!")
    }
    
    return demand;
  }

  async getDemandBy(filter: PartialDemandDto): Promise<Demand> {
    this.logger.log(`Get demand by a filter`)

    return this.demandRepository.findOneBy(filter);
  }

  async deleteDemandById(id: number): Promise<Demand> {
    const demand = await this.getDemandById(id);
    if (!demand) {
      throw new NotFoundException("Demanda não encontrada!")
    }
    await this.demandRepository.delete({ id });

    return demand;
  }
}