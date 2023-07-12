import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreService } from 'services/Store.service';
import { Store } from 'domain/entities/Store.entity';
import { StoreController } from 'controllers/Store.controller';
import { User } from 'domain/entities/User.entity';
import { Category } from 'domain/entities/Category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Store, User, Category])],
  controllers: [StoreController],
  providers: [StoreService],
  exports: [TypeOrmModule, StoreService],
})
export class StoreModule {}
