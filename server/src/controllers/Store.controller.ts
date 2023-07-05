import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { StoreService } from "services/Store.service";
import { CreateStoreDto, UpdateStoreDto } from "domain/dto/Store.dto";
import { Store } from "domain/entities/Store.entity";


@Controller('api/stores')
export class StoreController {
  constructor(
    private readonly storesService: StoreService,
  ) { }

  //Get all stores
  @Get('/find')
  async getAll(): Promise<Store[]> {
    return await this.storesService.getAll()
  }

  //Get store by id
  @Get('/find/:id')
  async getOneById(@Param('id') id: string): Promise<Store> {
    return await this.storesService.getOneById(+id)
  }

  //Create a store
  @Post('/create')
  async create(@Body() store: CreateStoreDto): Promise<Store> {
    return await this.storesService.create(store);
  }

  //Update a store
  @Post('/update/:id')
  async update(@Param('id') id: string, storeDto: UpdateStoreDto): Promise<Store> {
    return await this.storesService.update(+id, storeDto);
  }

  //Delete a store
  @Post('/delete/:id')
  async delete(@Param('id') id: string): Promise<Store> {
    return await this.storesService.delete(+id);
  }
}
