import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { User } from '../../../domain/entities/User.entity';
import { Category } from '../../../domain/entities/Category.entity';
import { Comunicate } from '../../../domain/entities/Comunicate.entity';
import { Store } from '../../../domain/entities/Store.entity';
import { Demand } from '../../../domain/entities/Demand.entity';
import { Image } from '../../../domain/entities/Image.entity';


config();

@Injectable()
export class TypeOrmProvider implements TypeOrmOptionsFactory {
  private env: ConfigService = new ConfigService();

  public buildDataSourceOptions(): DataSourceOptions {
    return {
      type: 'postgres',
      url: this.env.get('DB_URL'),
      entities: [User, Category, Comunicate, Event, Image, Store, Demand],
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
