import { IEvent } from 'domain/interfaces/IEvent';
export declare class Event implements IEvent {
    id: number;
    name: string;
    initialDate: Date;
    finalDate: Date;
}
