import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comunicate } from "domain/entities/Comunicate.entity";
import { ComunicateService } from "services/Comunicate.service";
import { ComunicateController } from "controllers/Comunicate.controller";


@Module({
  imports: [
    TypeOrmModule.forFeature([Comunicate])
  ],
  providers: [ComunicateService],
  controllers: [ComunicateController],
  exports: [TypeOrmModule, ComunicateService]
})

export class ComunicateModule {}