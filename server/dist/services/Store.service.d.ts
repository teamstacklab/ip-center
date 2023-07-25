import { CreateStoreDto, UpdateStoreDto } from 'domain/dto/Store.dto';
import { Store } from 'domain/entities/Store.entity';
import { Repository } from 'typeorm';
import { IStoreService } from 'domain/interfaces/IStore';
export declare class StoreService implements IStoreService {
    private storeRepo;
    constructor(storeRepo: Repository<Store>);
    private readonly logger;
    getAll(): Promise<Store[]>;
    getOneById(id: number): Promise<Store>;
    create(storeDto: CreateStoreDto): Promise<Store>;
    update(id: number, update: UpdateStoreDto): Promise<Store>;
    delete(id: number): Promise<Store>;
    assureOwnerIsCurrentUser(storeId: number, userId: number): Promise<boolean>;
}
