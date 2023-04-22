import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvService } from 'infrastructure/environments/EnvService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmProvider implements TypeOrmOptionsFactory {
  constructor(private readonly envService: EnvService) {}
  public createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: "postgres",
      host: this.envService.getVariable('DB_HOST'),
      port: parseInt(this.envService.getVariable('DB_PORT')),
      username: this.envService.getVariable('DB_USER'),
      password: this.envService.getVariable('DB_PASS'),
      database: this.envService.getVariable('DB_NAME'),
      entities: [
        'dist/**/*.entity.{js, ts}'
      ],
      migrations: [
        'dist/**/migrations/**/*.{js, ts}'
      ],
      logger: 'file',
      synchronize: true
    }
  }
}