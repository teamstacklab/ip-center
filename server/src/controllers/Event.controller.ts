import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateEventDto, UpdateEventDto } from 'domain/dto/Event.dto';
import { EventService } from 'services/Event.service';
import { Event } from 'domain/entities/Event.entity';
import { RolesGuard } from 'infra/guards/Roles/roles.guard';
import { UseGuards } from '@nestjs/common';
import { JwtAccessAuthGuard } from 'infra/guards/Auth/jwt-access.guard';

@Controller('api/events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('/find')
  async getAll(): Promise<Event[]> {
    return await this.eventService.getAll();
  }

  @Get('/find/:id')
  async getOneById(@Param('id') id: string): Promise<Event> {
    return await this.eventService.getOneById(+id);
  }

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/create')
  async create(@Body() event: CreateEventDto): Promise<Event> {
    return await this.eventService.create(event);
  }

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() eventDto: UpdateEventDto,
  ): Promise<Event> {
    return await this.eventService.update(+id, eventDto);
  }

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/delete/:id')
  async delete(@Param('id') id: string): Promise<Event> {
    return await this.eventService.delete(+id);
  }
}
