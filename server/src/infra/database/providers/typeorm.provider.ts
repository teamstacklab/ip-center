import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from 'domain/entities/User.entity';
import { Store } from 'domain/entities/Store.entity';
import { Category } from 'domain/entities/Category.entity';
import { Comunicate } from 'domain/entities/Comunicate.entity';
import { Demand } from 'domain/entities/Demand.entity';

@Injectable()
export class TypeOrmProvider implements TypeOrmOptionsFactory {
  private readonly env: ConfigService = new ConfigService();
  
  public createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: "postgres",
      url: this.env.get<string>('DB_URL'),
      entities: [User, Store, Demand, Category, Comunicate, Event],
      synchronize: true,
    }
  }
}