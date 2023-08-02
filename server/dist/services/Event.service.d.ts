import { CreateEventDto, UpdateEventDto } from 'domain/dto/Event.dto';
import { Event } from 'domain/entities/Event.entity';
import { IEventService } from 'domain/interfaces/IEvent';
import { Repository } from 'typeorm';
export declare class EventService implements IEventService {
    private eventRepo;
    constructor(eventRepo: Repository<Event>);
    private readonly logger;
    getAll(): Promise<Event[]>;
    getOneById(id: number): Promise<Event>;
    create(eventDto: CreateEventDto): Promise<Event>;
    update(id: number, update: UpdateEventDto): Promise<Event>;
    delete(id: number): Promise<Event>;
}
