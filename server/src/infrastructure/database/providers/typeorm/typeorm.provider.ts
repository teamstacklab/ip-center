import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getEnv } from 'infrastructure/environments';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmProvider implements TypeOrmOptionsFactory {
  public createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: "postgres",
      host: getEnv('DB_HOST'),
      port: parseInt(getEnv('DB_PORT')),
      username: getEnv('DB_USER'),
      password: getEnv('DB_PASS'),
      database: getEnv('DB_NAME'),
      entities: [
        'dist/**/*.entity.{js, ts}'
      ],
      migrations: [
        'dist/**/migrations/**/*.{js, ts}'
      ],
      logger: 'file',
      synchronize: true,
    }
  }
}