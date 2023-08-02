import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmProvider } from '../infra/database';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [TypeOrmProvider],
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmProvider,
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
  ],
  exports: [TypeOrmProvider],
})
export class DatabaseModule {}
