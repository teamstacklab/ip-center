import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DemandUseCases } from "application/usecases/Demand.usecases";
import { Demand } from "domain/models/Demand.entity";
import { DemandController } from "presentation/controllers/Demand.controller";
import { UserModule } from "./User.module";

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([Demand])
  ],
  controllers: [DemandController],
  providers: [DemandUseCases],
  exports: [TypeOrmModule, DemandUseCases]
})

export class DemandModule {}