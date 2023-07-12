import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'domain/entities/User.entity';
import { Demand } from 'domain/entities/Demand.entity';
import { Store } from 'domain/entities/Store.entity';
import { Event } from 'domain/entities/Event.entity';
import { Comunicate } from 'domain/entities/Comunicate.entity';
import { Category } from 'domain/entities/Category.entity';
import { TypeOrmProvider } from 'infra/database';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [TypeOrmProvider],
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmProvider,
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([
      User,
      Demand,
      Category,
      Event,
      Comunicate,
      Store,
    ]),
  ],
  exports: [TypeOrmProvider],
})
export class DatabaseModule {}
