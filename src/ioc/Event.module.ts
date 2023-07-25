import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventService } from 'services/Event.service';
import { Event } from 'domain/entities/Event.entity';
import { EventController } from 'controllers/Event.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  providers: [EventService],
  controllers: [EventController],
  exports: [TypeOrmModule, EventService],
})
export class EventModule {}
