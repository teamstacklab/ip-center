import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateEventDto, UpdateEventDto } from "domain/dto/Event.dto";
import { EventService } from "services/Event.service";
import { Event } from "domain/entities/Event.entity";


@Controller('api/events')
export class EventController {
  constructor(
    private readonly EventService: EventService,
  ) { }

  //Get all events
  @Get('/find')
  async getAll(): Promise<Event[]> {
    return await this.EventService.getAll();
  }

  //Get a event by id
  @Get('/find/:id')
  async getOneById(@Param('id') id: string): Promise<Event> {
    return await this.EventService.getOneById(+id);
  }

  //Create a event
  @Post('/create')
  async create(@Body() event: CreateEventDto): Promise<Event> {
    return await this.EventService.create(event);
  }

  //Update a event
  @Post('/update/:id')
  async update(@Param('id') id: string, @Body() eventDto: UpdateEventDto): Promise<Event> {
    return await this.EventService.update(+id, eventDto);
  }

  //Delete a event
  @Post('/delete/:id')
  async delete(@Param('id') id: string): Promise<Event> {
    return await this.EventService.delete(+id);
  }
}