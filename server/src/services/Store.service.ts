import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateStoreDto, UpdateStoreDto } from 'domain/dto/Store.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from 'domain/entities/Store.entity';
import { Repository } from 'typeorm';
import { IStoreService } from 'domain/interfaces/IStore';

@Injectable()
export class StoreService implements IStoreService {
  constructor(@InjectRepository(Store) private storeRepo: Repository<Store>) {}

  private readonly logger = new Logger(StoreService.name);

  async getAll(): Promise<Store[]> {
    this.logger.log(`Get all Stores.`);

    return await this.storeRepo.find();
  }

  async getOneById(id: number): Promise<Store> {
    this.logger.log(`Get a specific Store ${id}.`);
    const store = await this.storeRepo.findOneBy({ id });
    if (!store) {
      throw new NotFoundException(`Loja ${id} não encontrada!`);
    }

    return store;
  }

  async create(storeDto: CreateStoreDto): Promise<Store> {
    this.logger.log(`Creates a store`);
    const store = await this.storeRepo.findOneBy({ name: storeDto.name });
    if (store) {
      throw new ConflictException(`A loja '${store.name}' já existe!`);
    }
    try {
      const newStore = this.storeRepo.create(storeDto);
      return await this.storeRepo.save(newStore);
    } catch (err) {
      throw new NotFoundException(`${err.detail}`);
    }
  }

  async update(id: number, update: UpdateStoreDto): Promise<Store> {
    this.logger.log(`Get the Store of id ${id}.`);
    const store = await this.getOneById(id);
    if (!store) {
      throw new NotFoundException(`Loja ${id} não encontrada!`);
    }
    try {
      await this.storeRepo.update({ id }, { ...update });
      return await this.getOneById(id);
    } catch (err) {
      throw new NotFoundException(`${err.detail}`);
    }

  }

  async delete(id: number): Promise<Store> {
    this.logger.log(`Deleting Store ${id}.`);
    const store = await this.getOneById(id);
    if (!store) {
      throw new NotFoundException(`Loja ${id} não encontrada!`);
    }
    await this.storeRepo.delete({ id });

    return store;
  }
}
