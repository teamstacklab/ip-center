import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateEventDto } from "application/dto/Event/createEvent.dto";
import { UpdateEventDto } from "application/dto/Event/updateEvent.dto";
import { EventUseCases } from "application/usecases/Event.usecases";
import { Event } from "domain/models/Event.entity";


@Controller('api/events')
export class EventController {
  constructor(private readonly eventUseCases: EventUseCases) { }


  // Pega todos os eventos
  @Get('/')
  async getAllEvents(): Promise<Event[]> {
    return await this.eventUseCases.getAllEvents();
  }

  // --> Pega um evento pelo id
  @Get('/find/:id')
  async getEventById(@Param('id') id: string): Promise<Event> {
    return await this.eventUseCases.getEventById(+id);
  }

  // --> Cria um evento
  @Post('/create')
  async createEvent(@Body() event: CreateEventDto): Promise<Event> {
    return await this.eventUseCases.createEvent(event);
  }

  // --> Atualiza um Evento
  @Post('/update/:id')
  async updateEvent(@Param('id') id: string, @Body() eventDto: UpdateEventDto): Promise<Event> {
    return await this.eventUseCases.updateEvent(+id, eventDto);
  }

  // --> Deleta um evento
  @Post('/delete/:id')
  async deleteEvent(@Param('id') id: string): Promise<Event> {
    return await this.eventUseCases.deleteEvent(+id);
  }
}