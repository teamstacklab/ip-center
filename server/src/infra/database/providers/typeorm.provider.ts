import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TypeOrmProvider implements TypeOrmOptionsFactory {
  private readonly env = new ConfigService();

  public createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    console.log(this.env.get<string>("DB_URL"))
    return {
      type: "postgres",
      url: this.env.get<string>('DB_URL'),
      entities: ['dist/**/*.entity.{js, ts}'],
      synchronize: true,
    }
  }
}