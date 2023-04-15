import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryUseCases } from "application/usecases/Category.usecases";
import { Category } from "domain/models/Category.entity";
import { CategoryController } from "presentation/controllers/Category.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([Category])
  ],
  controllers: [CategoryController],
  providers: [TypeOrmModule, CategoryUseCases],
  exports: [TypeOrmModule, CategoryUseCases],
})
export class CategoryModule {}