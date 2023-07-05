import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DemandService } from "services/Demand.service";
import { Demand } from "domain/entities/Demand.entity";
import { DemandController } from "controllers/Demand.controller";
import { UserModule } from "./User.module";
import { ConfigService } from "@nestjs/config";


@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([Demand])
  ],
  controllers: [DemandController],
  providers: [DemandService, ConfigService],
  exports: [TypeOrmModule, DemandService]
})

export class DemandModule {}