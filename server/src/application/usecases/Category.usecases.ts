import { ConflictException, Injectable, Logger, NotFoundException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "domain/models/Category.entity";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "application/dto/Category/createCategory.dto";
import { UpdateCategoryDto } from "application/dto/Category/updateCategory.dto";


@Injectable()
export class CategoryUseCases {
  constructor(
    @InjectRepository(Category) private categoryRepository: Repository<Category>
  ) { }

  private readonly logger = new Logger(CategoryUseCases.name);


  // --> Retorna todas as categorias
  async getAllCategories(): Promise<Category[]> {
    this.logger.log("Find all categories");

    return await this.categoryRepository.find();
  }


  // --> Retorna uma categoria pelo id
  async getCategoryById(id: number): Promise<Category> {
    this.logger.log(`Get the category with id: ${id}`);

    const category = await this.categoryRepository.findOneBy({ id });

    if (!category) {
      throw new NotFoundException(`Categoria de id: ${id} não encontrada!`);
    }

    return category;
  }


  // --> Cria uma categoria
  async createCategory(categoryDto: CreateCategoryDto): Promise<Category> {
    this.logger.log(`Creates a category`);

    const existingCategory = await this.categoryRepository.findOneBy({ name: categoryDto.name })

    if (existingCategory) {
      throw new ConflictException(`Uma categoria com nome: ${existingCategory.name} já existe!`);
    }

    const category = this.categoryRepository.create(categoryDto);

    return await this.categoryRepository.save(category);
  }


  // --> Atualiza um categoryo pelo id
  async updateCategory(id: number, categoryDto: UpdateCategoryDto): Promise<Category> {
    this.logger.log(`Updating category of id: ${id}`);

    await this.getCategoryById(id);

    if (Object.values(categoryDto).length == 0) {
      throw new InternalServerErrorException(`Preencha ao menos um: { name, tags }`);
    }

    await this.categoryRepository.update({ id }, { ...categoryDto });

    return await this.getCategoryById(id);
  }


  // --> Deleta uma categoria
  async deleteCategory(id: number): Promise<Category> {
    this.logger.log(`Deleting the category of id: ${id}`);

    const category = await this.getCategoryById(id);

    await this.categoryRepository.delete({ id });

    return category;
  }

}