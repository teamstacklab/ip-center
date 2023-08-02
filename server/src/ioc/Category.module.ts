import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from '../services/Category.service';
import { Category } from '../domain/entities/Category.entity';
import { CategoryController } from '../controllers/Category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [TypeOrmModule, CategoryService],
  exports: [TypeOrmModule, CategoryService],
})
export class CategoryModule {}
