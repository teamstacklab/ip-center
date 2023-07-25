import { Demand } from 'domain/entities/Demand.entity';
import { DemandService } from 'services/Demand.service';
export declare class DemandController {
    private readonly demandService;
    constructor(demandService: DemandService);
    getAll(): Promise<Demand[]>;
    getOneById(id: string): Promise<Demand>;
    authorizate(id: string): Promise<any>;
    reject(id: string): Promise<any>;
}
