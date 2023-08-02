import { IDemand } from '../interfaces/IDemand';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('demands')
export class Demand implements IDemand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 300 })
  cpf: string;

  @Column({ nullable: false, length: 300 })
  store: string;

  @Column({ nullable: false, length: 300 })
  name: string;

  @Column({ nullable: false, length: 300 })
  whatsapp: string;

  @Column({ nullable: false, length: 300 })
  username: string;

  @Column({ nullable: false, length: 300 })
  email: string;

  @Column({ nullable: false, length: 300 })
  password: string;

  @Column({ nullable: false })
  isAdmin: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
