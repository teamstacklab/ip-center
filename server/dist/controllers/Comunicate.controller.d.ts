import { ComunicateService } from 'services/Comunicate.service';
import { Comunicate } from 'domain/entities/Comunicate.entity';
import { CreateComunicateDto, UpdateComunicateDto } from 'domain/dto/Comunicate.dto';
export declare class ComunicateController {
    private readonly comunicateService;
    constructor(comunicateService: ComunicateService);
    getAll(): Promise<Comunicate[]>;
    getOneById(id: string): Promise<Comunicate>;
    create(comunicate: CreateComunicateDto): Promise<Comunicate>;
    update(id: string, update: UpdateComunicateDto): Promise<Comunicate>;
    delete(id: number): Promise<Comunicate>;
}
