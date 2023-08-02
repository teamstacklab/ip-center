import { Module } from '@nestjs/common';
import { ImageService } from '../services/Image.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageController } from '../controllers/Image.controller';
import { Image } from '../domain/entities/Image.entity';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    MulterModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (env: ConfigService) => ({
        dest: env.get('IMAGES_DEST'),
      }),
    }),
    TypeOrmModule.forFeature([Image]),
  ],
  providers: [ImageService, ConfigService],
  controllers: [ImageController],
  exports: [TypeOrmModule, ImageService],
})
export class ImageModule {}
