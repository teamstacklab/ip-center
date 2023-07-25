import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'domain/entities/Category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto, UpdateCategoryDto } from 'domain/dto/Category.dto';
import { ICategoryService } from 'domain/interfaces/ICategory';

@Injectable()
export class CategoryService implements ICategoryService {
  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
  ) {}

  private readonly logger = new Logger(CategoryService.name);

  async getAll(): Promise<Category[]> {
    this.logger.log('Find all categories');

    return await this.categoryRepo.find();
  }

  async getOne(
    filter: Partial<Omit<Category, 'tags'>> | Partial<Omit<Category, 'tags'>>[],
  ): Promise<Category> {
    const category = this.categoryRepo.findOne({ where: filter });
    if (!category) {
      throw new NotFoundException(`Categoria ${filter} não encontrada!`);
    }

    return category;
  }

  async getOneById(id: number): Promise<Category> {
    this.logger.log(`Get category ${id}.`);
    const category = await this.categoryRepo.findOneBy({ id });
    if (!category) {
      throw new NotFoundException(`Categoria ${id} não encontrada!`);
    }

    return category;
  }

  async create(categoryDto: CreateCategoryDto): Promise<Category> {
    this.logger.log(`Creates a category`);
    const category = await this.categoryRepo.findOneBy({
      name: categoryDto.name,
    });
    if (category) {
      throw new ConflictException(
        `Uma categoria com nome: ${category.name} já existe!`,
      );
    }
    const newCategory = this.categoryRepo.create(categoryDto);

    return await this.categoryRepo.save(newCategory);
  }

  async update(id: number, update: UpdateCategoryDto): Promise<Category> {
    this.logger.log(`Update category ${id}`);
    const category = await this.getOneById(id);
    if (!category) {
      throw new NotFoundException(`Comunicado ${id} não existe!`);
    }
    await this.categoryRepo.update({ id }, { ...update });

    return await this.getOneById(id);
  }

  async delete(id: number): Promise<Category> {
    this.logger.log(`Delete category ${id}`);
    const category = await this.getOneById(id);
    if (!category) {
      throw new NotFoundException(`Comunicado ${id} não existe!`);
    }
    await this.categoryRepo.delete({ id });

    return category;
  }
}
