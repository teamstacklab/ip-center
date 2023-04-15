import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { CreateCategoryDto } from "application/dto/Category/createCategory.dto";
import { CategoryUseCases } from "application/usecases/Category.usecases";


@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryUseCases: CategoryUseCases) { }

  @Get('/')
  async getAll(): Promise<any> {
    return await this.categoryUseCases.getAllCategories();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<any> {
    return await this.categoryUseCases.getCateryById(id);
  }

  @Post('/create')
  async createCategory(@Body() category: CreateCategoryDto): Promise<any> {
    console.log(category)
    return await this.categoryUseCases.createCategory(category);
  }

  @Post('/delete/:id')
  async deleteCategory(@Param() id: number): Promise<any> {
    return await this.categoryUseCases.deleteCategory(id);
  }
}