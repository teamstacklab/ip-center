import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DemandUseCases } from "application/usecases/Demand.usecases";
import { Demand } from "domain/models/Demand.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Demand])],
  providers: [DemandUseCases],
  exports: [TypeOrmModule, DemandUseCases]
})

export class DemandModule {}