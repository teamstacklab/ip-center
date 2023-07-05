import { ConflictException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { CreateStoreDto, UpdateStoreDto } from "domain/dto/Store.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Store } from "domain/entities/Store.entity";
import { Repository } from "typeorm";
import { IStoreService } from "domain/interfaces/IStore";
import { UserService } from "./User.service";
import { User } from "domain/entities/User.entity";
import { Category } from "domain/entities/Category.entity";
import { CategoryService } from "./Category.service";
import { PartialUserDto } from "domain/dto/User.dto";


@Injectable()
export class StoreService implements IStoreService {
  constructor(
    @InjectRepository(Store) private storeRepo: Repository<Store>,
    private userService: UserService,
    private categoryService: CategoryService,
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

    const store = await this.storeRepo.findOneBy({ id });
    if (!store){
      throw new NotFoundException(`Loja ${id} não encontrada!`);
    }

    const owner = await this.verifyOwner(store.owner);

    console.log(owner);

    return store;
  }

  //Create a store
  async create(storeDto: CreateStoreDto): Promise<Store> {
    this.logger.log(`Creating a Store: ${storeDto}`);

    const store = await this.storeRepo.findOne({
      where: { name: storeDto.name }
    });

    if (store) {
      throw new ConflictException(`A loja ${store} já existe!`);
    }

    const newStore = this.storeRepo.create(storeDto);

    return await this.storeRepo.save(newStore);
  }

  //Update a store
  async update(id: number, update: UpdateStoreDto): Promise<Store> {
    this.logger.log(`Get the Store of id ${id}.`);

    const store = await this.getOneById(id)
    if (!store) {
      throw new NotFoundException(`Loja ${id} não encontrada!`);
    }
    await this.storeRepo.update({ id }, { ...update });

    return await this.getOneById(id);
  }

  //Delete a store
  async delete(id: number): Promise<Store> {
    this.logger.log(`Deleting Store ${id}.`);

    const store = await this.getOneById(id);
    if (!store) {
      throw new NotFoundException(`Loja ${id} não encontrada!`);
    }
 
    await this.storeRepo.delete({ id });

    return store;
  }

  //Verify the store owner
  private async verifyOwner(owner: PartialUserDto): Promise<User | null> {
    const user = await this.userService.getOne({...owner});
    if (!user) {
      return null;
    }
    return user;
  }

  //Verify the store category
  private async verifyCategory(categoryId: number): Promise<Category | null> {
    const category = await this.categoryService.getOneById(categoryId);
    if (!category) {
      return null;
    }
    return category;
  }
}