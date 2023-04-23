import { ConflictException, InternalServerErrorException, Injectable, NotFoundException } from "@nestjs/common";
import { Demand } from "domain/models/Demand.entity";
import { CreateDemandDto } from "application/dto/Demand/createDemand.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PartialDemandDto } from "application/dto/Demand/partialDemand.dto";
import { UserUseCases } from "./User.usecases";
import { EncryptionAdapter } from "application/adapters/Encryption.adapter";
import { Logger } from "@nestjs/common";
import { User } from "domain/models/User.entity";


@Injectable()
export class DemandUseCases {
  constructor(
    @InjectRepository(Demand) private demandRepository: Repository<Demand>,
    private userUseCases: UserUseCases,
    private readonly encryption: EncryptionAdapter,
  ) { }

  private readonly logger = new Logger(UserUseCases.name);


  // --> Pega todas as demandas
  async getAllDemands(): Promise<Demand[]> {
    this.logger.log("Get all demands")
    
    return this.demandRepository.find();
  }


  // --> Pesquisa por demandas ou usuários
  async searchDemands(demandDto: CreateDemandDto): Promise<Demand | User> {
    return await this.demandRepository.findOneBy({ username: demandDto.username })
      || await this.demandRepository.findOneBy({ email: demandDto.email })
      || await this.userUseCases.findOneBy({ username: demandDto.username })
      || await this.userUseCases.findOneBy({ email: demandDto.email });
  }
  

  // --> Cria uma nova demanda de registro
  async createDemand(demandDto: CreateDemandDto): Promise<Demand> {
    this.logger.log("Creating a demand")
    
    const existingDemandorUser = await this.searchDemands(demandDto);

    if (existingDemandorUser) {
      throw new ConflictException(`Demanda ou usuário com este email ou username já existe`)
    }

    const demand = this.demandRepository.create(demandDto);

    return await this.demandRepository.save(demand);
  }


  // --> Autoriza uma demanda de registro
  async authorizate(demandId: number): Promise<any> {
    const demand = await this.getDemandById(demandId);

    const { cpf, loja, id, ...partialDemand } = demand;
    
    const user = await this.userUseCases.createUser({
      ...partialDemand,
      isAdmin: false
    });

    await this.deleteDemandById(id);

    return user;
  }


  // --> Pega uma demanda pelo ID
  async getDemandById(id: number): Promise<Demand> {
    this.logger.log(`Get demand by id: ${id}`)

    const demand = await this.demandRepository.findOneBy({ id });

    if (!demand) {
      throw new NotFoundException(`Demanda de Id: ${id} não encontrada!`);
    }
    
    return demand;
  }


  // --> Pega uma demanda por um dado valor
  async getDemandBy(values: PartialDemandDto): Promise<Demand> {
    this.logger.log(`Get demand by values`)

    const demand = await this.demandRepository.findOne({where: values})

    if (!demand) {
      throw new NotFoundException(`Usuário de valores {${values}} não encontrado.`)
    }

    return demand;
  }


  // --> Deleta uma demanda (Rejeita)
  async deleteDemandById(id: number): Promise<Demand> {
    this.logger.log(`Get demand by id: ${id}`)

    const demand = await this.getDemandById(id);
    await this.demandRepository.delete({ id });

    return demand;
  }
}