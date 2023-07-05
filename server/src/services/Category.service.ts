import { ConflictException, Injectable, Logger, NotFoundException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "domain/entities/Category.entity";
import { Repository } from "typeorm";
import { CreateCategoryDto, UpdateCategoryDto } from "domain/dto/Category.dto";
import { ICategoryService } from "domain/interfaces/ICategory";


@Injectable()
export class CategoryService implements ICategoryService {
  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
  ) { }

  private readonly logger = new Logger(CategoryService.name);

  //Get all categories
  async getAll(): Promise<Category[]> {
    this.logger.log("Find all categories");

    return await this.categoryRepo.find();
  }


  //Get a category by id
  async getOneById(id: number): Promise<Category> {
    this.logger.log(`Get category ${id}.`);

    const category = await this.categoryRepo.findOneBy({ id });

    if (!category){
      throw new NotFoundException(`Categoria ${id} não encontrada!`);
    }

    return category;
  }

  //Create a category
  async create(categoryDto: CreateCategoryDto): Promise<Category> {
    this.logger.log(`Creates a category ${categoryDto}`);

    const category = await this.categoryRepo.findOneBy({ name: categoryDto.name })

    if (category) {
      throw new ConflictException(`Uma categoria com nome: ${category.name} já existe!`);
    }

    const newCategory = this.categoryRepo.create(categoryDto);

    return await this.categoryRepo.save(newCategory);
  }


  //Update a category
  async update(id: number, update: UpdateCategoryDto): Promise<Category> {
    this.logger.log(`Update category ${id}`);

    await this.getOneById(id);
    await this.categoryRepo.update({id}, {...update})

    return await this.getOneById(id)
  }


  //Delete a category
  async delete(id: number): Promise<Category> {
    this.logger.log(`Delete category ${id}`);

    const category = await this.getOneById(id)
    await this.categoryRepo.delete({ id });

    return category;
  }

}