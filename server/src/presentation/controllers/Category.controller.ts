import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { CreateCategoryDto } from "application/dto/Category/createCategory.dto";
import { UpdateCategoryDto } from "application/dto/Category/updateCategory.dto";
import { CategoryUseCases } from "application/usecases/Category.usecases";
import { Category } from "domain/models/Category.entity";


@Controller('api/categories')
export class CategoryController {
  constructor(private readonly categoryUseCases: CategoryUseCases) { }

  // --> Pega todas as categorias
  @Get('/')
  async getAll(): Promise<Category[]> {
    return await this.categoryUseCases.getAllCategories();
  }

  // --> Pega uma categoria pelo ID
  @Get('/find/:id')
  async getById(@Param('id') id: number): Promise<Category> {
    return await this.categoryUseCases.getCategoryById(id);
  }

  // --> Cria uma categoria
  @Post('/create')
  async createCategory(@Body() category: CreateCategoryDto): Promise<Category> {
    console.log(category)
    return await this.categoryUseCases.createCategory(category);
  }

  // --> Atualiza uma categoria
  @Post('/update/:id')
  async updateCategory(@Param('id') id: string, @Body() categoryDto: UpdateCategoryDto): Promise<Category> {
    return await this.categoryUseCases.updateCategory(+id, categoryDto);
  }

  // --> Deleta uma categoria
  @Post('/delete/:id')
  async deleteCategory(@Param('id') id: string): Promise<Category> {
    return await this.categoryUseCases.deleteCategory(+id);
  }
}