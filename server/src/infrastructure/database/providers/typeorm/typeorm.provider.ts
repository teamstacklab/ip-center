import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvService } from 'infrastructure/environments/EnvService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmProvider implements TypeOrmOptionsFactory {
  constructor(private readonly envService: EnvService) {}
  public createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: "mongodb",
      url: this.envService.getVariable('DB_URL'),
      database: this.envService.getVariable('DB_NAME'),
      entities: [
        'dist/**/*.entity.{js, ts}'
      ],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  }
}