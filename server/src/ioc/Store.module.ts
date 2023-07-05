import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StoreService } from "services/Store.service";
import { Store } from "domain/entities/Store.entity";
import { StoreController } from "controllers/Store.controller";


@Module({
  imports: [
    TypeOrmModule.forFeature([Store])
  ],
  controllers: [
    StoreController
  ],
  providers: [
    StoreService,
  ],
  exports: [
    TypeOrmModule,
    StoreService,
  ],
})

export class StoreModule {}