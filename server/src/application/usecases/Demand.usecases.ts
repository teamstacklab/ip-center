import { ConflictException, Injectable } from "@nestjs/common";
import { Demand } from "domain/models/Demand.entity";
import { CreateDemandDto } from "application/dto/createDemand.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PartialDemandDto } from "application/dto/partialDemand.dto";

@Injectable()
export class DemandUseCases {
  constructor(@InjectRepository(Demand) private demandRepository: Repository<Demand>) { }

  // Cria uma nova demanda de registro]
  async createDemand(demandDto: CreateDemandDto): Promise<PartialDemandDto> {
    const existingDemand = await this.getDemandByUsername(demandDto.username);
    if (existingDemand) {
      throw new ConflictException(`Demanda já existente!`)
    }
    const demand = this.demandRepository.create(demandDto);
    await this.demandRepository.save(demand);
    const { password, ...partialDemand } = demandDto;
    return partialDemand;
  }

  async getDemandById(id: number): Promise<Demand> {
    return this.demandRepository.findOneBy({ id });
  }

  async getDemandByUsername(username: string): Promise<Demand> {
    return this.demandRepository.findOneBy({ username });
  }
}