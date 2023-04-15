import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comunicado } from "domain/models/Comunicado.entity";
import { ComunicadoUseCases } from "application/usecases/Comunicado.usecases";
import { ComunicadoController } from "presentation/controllers/Comunicado.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([Comunicado])
  ],
  providers: [ComunicadoUseCases],
  controllers: [ComunicadoController],
  exports: [TypeOrmModule, ComunicadoUseCases]
})

export class ComunicadoModule {}