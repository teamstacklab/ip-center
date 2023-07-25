import { CreateEventDto, UpdateEventDto } from 'domain/dto/Event.dto';
import { EventService } from 'services/Event.service';
import { Event } from 'domain/entities/Event.entity';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    getAll(): Promise<Event[]>;
    getOneById(id: string): Promise<Event>;
    create(event: CreateEventDto): Promise<Event>;
    update(id: string, eventDto: UpdateEventDto): Promise<Event>;
    delete(id: string): Promise<Event>;
}
