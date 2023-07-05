import { CreateCategoryDto, UpdateCategoryDto } from "domain/dto/Category.dto";
import { Category } from "domain/entities/Category.entity";


export interface ICategory {
  id: number;
  name: string;
  tags: string[];
}

export interface ICategoryService {
  getAll(): Promise<Category[]>;
  getOneById(id: number): Promise<Category>;
  create(categoryDto: CreateCategoryDto): Promise<Category>;
  update(id: number, update: UpdateCategoryDto): Promise<Category>;
  delete(id: number): Promise<Category>;
}