import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

@Injectable()
export class TypeOrmProvider implements TypeOrmOptionsFactory {
  private env: ConfigService = new ConfigService();

  public buildDataSourceOptions(): DataSourceOptions {
    return {
      type: 'postgres',
      url: this.env.get('DB_URL'),
      entities: ['dist/**/*.entity.js'],
      migrations: ['migrations/*.ts'],
      migrationsTableName: 'migrations',
      migrationsRun: false,
      synchronize: false,
    };
  }
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return this.buildDataSourceOptions() as TypeOrmModuleOptions;
  }
}

const dataSource = new DataSource(
  new TypeOrmProvider().buildDataSourceOptions(),
);

export default dataSource;
