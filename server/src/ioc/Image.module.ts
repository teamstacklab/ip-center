import { Module } from "@nestjs/common";
import { ImageService } from "services/Image.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ImageController } from "controllers/Image.controller";
import { Image } from "domain/entities/Image.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Image])],
  providers: [ImageService],
  controllers: [ImageController],
  exports: [TypeOrmModule, ImageService],
})

export class ImageModule {}