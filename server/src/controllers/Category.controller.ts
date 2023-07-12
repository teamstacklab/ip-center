import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'domain/dto/Category.dto';
import { CategoryService } from 'services/Category.service';
import { Category } from 'domain/entities/Category.entity';
import { RolesGuard } from 'infra/guards/Roles/roles.guard';
import { UseGuards } from '@nestjs/common';
import { JwtAccessAuthGuard } from 'infra/guards/Auth/jwt-access.guard';

@Controller('api/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/find')
  async getAll(): Promise<Category[]> {
    return await this.categoryService.getAll();
  }

  @Get('/find/:id')
  async getById(@Param('id') id: number): Promise<Category> {
    return await this.categoryService.getOneById(id);
  }

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/create')
  async createCategory(@Body() category: CreateCategoryDto): Promise<Category> {
    return await this.categoryService.create(category);
  }

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/update/:id')
  async updateCategory(
    @Param('id') id: string,
    @Body() update: UpdateCategoryDto,
  ): Promise<Category> {
    return await this.categoryService.update(+id, update);
  }

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/delete/:id')
  async deleteCategory(@Param('id') id: string): Promise<Category> {
    return await this.categoryService.delete(+id);
  }
}
