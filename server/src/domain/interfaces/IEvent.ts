export interface IEvent {
  id: number;
  name: string;
  initialDate: Date;
  finalDate: Date;
<<<<<<< HEAD
=======
}

export interface IEventService {
  getAll(): Promise<Event[]>;
  getOneById(id: number): Promise<Event>;
  create(eventDto: CreateEventDto): Promise<Event>;
  update(id: number, update: UpdateEventDto): Promise<Event>;
  delete(id: number): Promise<Event>;
>>>>>>> server
}