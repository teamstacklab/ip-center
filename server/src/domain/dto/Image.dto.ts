import { UploadedFiles } from '@nestjs/common';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { User } from '../entities/User.entity';
import { ImagesRole } from '../interfaces/IImage';

export class CreateImageDto {
  @IsNotEmpty() url: string;
  @IsNotEmpty() owner: User;
  @IsNotEmpty() @IsEnum(ImagesRole) role: ImagesRole;
}

export class UploadImageDto {
  @IsNotEmpty() @IsEnum(ImagesRole) role: ImagesRole;
}

export class UpdateImageDto {
  @IsOptional() @IsNotEmpty() url?: string;
  @IsOptional() @IsNotEmpty() @IsEnum(ImagesRole) role?: ImagesRole;
}
