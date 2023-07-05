import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LojaUseCases } from "application/usecases/Loja.usecases";
import { Loja } from "domain/models/Loja.entity";
import { AuthenticatedGuard } from "infrastructure/guards/authenticated.guard";
import { LojaController } from "presentation/controllers/Loja.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([Loja])
  ],
  controllers: [
    LojaController
  ],
  providers: [
    LojaUseCases,
    AuthenticatedGuard
  ],
  exports: [
    TypeOrmModule,
    LojaUseCases,
    AuthenticatedGuard
  ],
})

export class LojaModule {}