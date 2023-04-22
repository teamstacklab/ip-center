import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateEventDto } from "application/dto/Event/createEvent.dto";
import { EventUseCases } from "application/usecases/Event.usecases";

@Controller('events')
export class EventController {
  constructor(private readonly eventUseCases: EventUseCases) {}

  // Pega todos os eventos
  @Get('/')
  async getAllEvents(): Promise<any> {
    return await this.eventUseCases.getAllEvents();
  }

  // Pega um evento pelo id
  @Get('/:id')
  async getEventById(@Param('id') id: number): Promise<any> {
    return await this.eventUseCases.getEventById(id);
  }

  // Cria um evento
  @Post('/create')
  async createEvent(@Body() event: CreateEventDto): Promise<any> {
    return await this.eventUseCases.createEvent(event);
  }

  // Deleta um evento
  @Post('/delete/:id')
  async deleteEvent(@Param('id') id: number): Promise<any> {
    return await this.eventUseCases.deleteEvent(id);
  }
}