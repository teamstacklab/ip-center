import { IEvent } from "domain/interfaces/IEvent";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('events')
export class Event implements IEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, length: 100 })
  name: string;

  @Column('timestamp', { nullable: false })
  initialDate: Date;

  @Column('timestamp', { nullable: false })
  finalDate: Date;
}