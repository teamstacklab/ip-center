import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DemandUseCases } from "application/usecases/Demand.usecases";
import { Demand } from "domain/models/Demand.entity";
import { EnvService } from "infrastructure/environments/EnvService";
import { AuthenticatedGuard } from "infrastructure/guards/authenticated.guard";
import { DemandController } from "presentation/controllers/Demand.controller";
import { UserModule } from "./User.module";

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([Demand])
  ],
  controllers: [DemandController],
  providers: [DemandUseCases, AuthenticatedGuard, EnvService],
  exports: [TypeOrmModule, DemandUseCases, AuthenticatedGuard]
})

export class DemandModule {}