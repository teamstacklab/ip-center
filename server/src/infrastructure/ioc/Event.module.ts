import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventUseCases } from "application/usecases/Event.usecases";
import { Event } from "domain/models/Event.entity";
import { EventController } from "presentation/controllers/Event.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([Event])
  ],
  providers: [EventUseCases],
  controllers: [EventController],
  exports: [TypeOrmModule, EventUseCases]
})

export class EventModule {}