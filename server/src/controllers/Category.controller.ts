import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { CreateCategoryDto, UpdateCategoryDto } from "domain/dto/Category.dto";
import { CategoryService } from "services/Category.service";
import { Category } from "domain/entities/Category.entity";


@Controller('api/categories')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
  ) { }

  //Get all categories
  @Get('/')
  async getAll(): Promise<Category[]> {
    return await this.categoryService.getAll();
  }

  //Get a category
  @Get('/find/:id')
  async getById(@Param('id') id: number): Promise<Category> {
    return await this.categoryService.getOneById(id);
  }

  //Create a category
  @Post('/create')
  async createCategory(@Body() category: CreateCategoryDto): Promise<Category> {
    console.log(category)
    return await this.categoryService.create(category);
  }

  //Update a category
  @Post('/update/:id')
  async updateCategory(@Param('id') id: string, @Body() update: UpdateCategoryDto): Promise<Category> {
    return await this.categoryService.update(+id, update);
  }

  //Delete a category
  @Post('/delete/:id')
  async deleteCategory(@Param('id') id: string): Promise<Category> {
    return await this.categoryService.delete(+id);
  }
}