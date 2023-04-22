import { ConflictException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "domain/models/Category.entity";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "application/dto/Category/createCategory.dto";

@Injectable()
export class CategoryUseCases {
  constructor(
    @InjectRepository(Category) private categoryRepository: Repository<Category>
  ) { }

  private readonly logger = new Logger(CategoryUseCases.name);

  async getAllCategories(): Promise<Category[]> {
    this.logger.log("Find all categories");

    return await this.categoryRepository.find();
  }

  async getCateryById(id: number): Promise<Category> {
    this.logger.log(`Get a category by id: ${id}`);

    const category = await this.categoryRepository.findOneBy({ id });

    if (!category) {
      throw new NotFoundException(`Categoria de id: ${id} não encontrada!`);
    }

    return category;
  }

  async createCategory(categoryDto: CreateCategoryDto): Promise<Category> {
    this.logger.log(`Creating an category`);

    const existingCategory = await this.categoryRepository.findOneBy({ name: categoryDto.name })
    console.log(categoryDto)
    if (existingCategory) {
      throw new ConflictException(`Uma categoria com nome: ${existingCategory.name}`);
    }
    const category = this.categoryRepository.create(categoryDto);
    await this.categoryRepository.save(category);

    return category;
  }
  async deleteCategory(id: number): Promise<Category> {
    this.logger.log(`Deleting the category of id: ${id}`);

    const category = await this.categoryRepository.findOneBy({ id });
    await this.categoryRepository.delete({ id });

    return category;
  }

}