import { CreateStoreDto, UpdateStoreDto, PartialStoreDto } from "domain/dto/Store.dto";
import { Category } from "domain/entities/Category.entity";
import { User } from "domain/entities/User.entity";
import { Store } from "domain/entities/Store.entity";


export interface IStore {
  id: number;
  owner: User;
  name: string;
  slogan: string;
  images: string[];
  description: string;
  instagram: string;
  whatsapp: string;
  location: string;
  services: string;
  category: Category;
  additionalInfo: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface IStoreService {
  getAll(): Promise<Store[]>;
  getOneById(id: number): Promise<Store>;
  create(Store: CreateStoreDto): Promise<Store>;
  update(id: number, update: UpdateStoreDto): Promise<Store>;
  delete(id: number): Promise<Store>;
}