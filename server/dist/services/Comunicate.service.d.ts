import { Comunicate } from 'domain/entities/Comunicate.entity';
import { CreateComunicateDto, UpdateComunicateDto } from 'domain/dto/Comunicate.dto';
import { Repository } from 'typeorm';
import { IComunicateService } from 'domain/interfaces/IComunicate';
export declare class ComunicateService implements IComunicateService {
    private comunicateRepo;
    constructor(comunicateRepo: Repository<Comunicate>);
    private readonly logger;
    getAll(): Promise<Comunicate[]>;
    getOneById(id: number): Promise<Comunicate>;
    create(comunicateDto: CreateComunicateDto): Promise<Comunicate>;
    update(id: number, update: UpdateComunicateDto): Promise<Comunicate>;
    delete(id: number): Promise<Comunicate>;
}
