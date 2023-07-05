import { ConflictException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { CreateStoreDto, UpdateStoreDto } from "domain/dto/Store.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Store } from "domain/entities/Store.entity";
import { Repository } from "typeorm";
import { IStoreService } from "domain/interfaces/IStore";


@Injectable()
export class StoreService implements IStoreService {
  constructor(
    @InjectRepository(Store) private storeRepo: Repository<Store>,
  ) { }

  private readonly logger = new Logger(StoreService.name);

  //Get all stores
  async getAll(): Promise<Store[]> {
    this.logger.log(`Get all Stores.`);

    return await this.storeRepo.find();
  }

  //Get a store by id
  async getOneById(id: number): Promise<Store> {
    this.logger.log(`Get a specific Store ${id}.`);
    const store = this.storeRepo.findOneBy({ id });
    if (!store) throw new NotFoundException(`Loja ${id} não encontrada!`);

    return store;
  }

  //Create a store
  async create(store: CreateStoreDto): Promise<Store> {
    this.logger.log(`Creating a Store: ${store}`);

    const existingStore = await this.storeRepo.findOne({
      where: [{ name: store.name }]
    });

    if (existingStore) throw new ConflictException(`Esta Loja já existe!`);

    const newStore = this.storeRepo.create(store);

    return await this.storeRepo.save(newStore);
  }

  //Update a store
  async update(id: number, update: UpdateStoreDto): Promise<Store> {
    this.logger.log(`Get the Store of id ${id}.`);

    await this.getOneById(id)
    await this.storeRepo.update({ id }, { ...update });

    return await this.storeRepo.findOneBy({ id });
  }

  //Delete a store
  async delete(id: number): Promise<Store> {
    this.logger.log(`Deleting Store ${id}.`);

    const store = this.getOneById(id);

    await this.storeRepo.delete({ id });

    return store;
  }
}