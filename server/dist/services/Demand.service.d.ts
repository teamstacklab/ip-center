import { Demand } from 'domain/entities/Demand.entity';
import { CreateDemandDto } from 'domain/dto/Demand.dto';
import { Repository } from 'typeorm';
import { UserService } from 'services/User.service';
import { IDemandService } from 'domain/interfaces/IDemand';
export declare class DemandService implements IDemandService {
    private demandRepo;
    private readonly userService;
    constructor(demandRepo: Repository<Demand>, userService: UserService);
    private readonly logger;
    getAll(): Promise<Demand[]>;
    getOneById(id: number): Promise<Demand>;
    create(demandDto: CreateDemandDto): Promise<Demand>;
    authorizate(id: number): Promise<any>;
    reject(id: number): Promise<any>;
}
