import { StoreService } from 'services/Store.service';
import { CreateStoreDto, UpdateStoreDto } from 'domain/dto/Store.dto';
import { Store } from 'domain/entities/Store.entity';
import { Request } from 'express';
export declare class StoreController {
    private readonly storesService;
    constructor(storesService: StoreService);
    getAll(): Promise<Store[]>;
    getOneById(id: string): Promise<Store>;
    create(store: CreateStoreDto): Promise<Store>;
    update(req: Request, id: string, storeDto: UpdateStoreDto): Promise<Store>;
    delete(req: Request, id: string): Promise<Store>;
}
