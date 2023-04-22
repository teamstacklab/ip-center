import { ConflictException, Injectable, InternalServerErrorException, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateEventDto } from "application/dto/Event/createEvent.dto";
import { UpdateEventDto } from "application/dto/Event/updateEvent.dto";
import { Event } from "domain/models/Event.entity";
import { json } from "stream/consumers";
import { Repository } from "typeorm";

@Injectable()
export class EventUseCases {
  constructor(@InjectRepository(Event) private eventRepository: Repository<Event>) {}

  private readonly logger = new Logger(EventUseCases.name);


  // --> Pega todos os eventos
  async getAllEvents(): Promise<Event[]> {
    this.logger.log("Get all events");

    return this.eventRepository.find()
  }


  // --> Pega um pelo id
  async getEventById(id: number): Promise<Event> {
    this.logger.log(`Get a event by id: ${id}`);

    const event = await this.eventRepository.findOneBy({ id });
    if (!event) {
      throw new NotFoundException(`Evento de id: ${id} não existe!`);
    }
    return event;
  }


  // --> Cria um evento novo
  async createEvent(eventDto: CreateEventDto): Promise<Event> {
    this.logger.log(`Creating an event`);

    const existingEvent = await this.eventRepository.findOneBy({ name: eventDto.name });
    if (existingEvent) {
      throw new ConflictException(`Um evento de nome: ${eventDto.name} já existe!`)
    }
    const event = this.eventRepository.create(eventDto);
    await this.eventRepository.save(event);

    return event;
  }


  // --> Atualiza um evento pelo id
  async updateEvent(id: number, eventDto: UpdateEventDto): Promise<Event> {
    this.logger.log(`Updating event of id: ${id}`);

    await this.getEventById(id);

    if (Object.values(eventDto).length == 0) {
      throw new InternalServerErrorException(`Preencha ao menos um: {name, initialDate, finalDate}`);
    }

    await this.eventRepository.update({id}, {...eventDto});

    return await this.getEventById(id);
  }


  // --> Deleta um evento pelo id
  async deleteEvent(id: number): Promise<Event> {
    this.logger.log(`Deleting event of id: ${id}`);

    const event = await this.getEventById(id);
    await this.eventRepository.delete({ id });

    return event;
  }
}