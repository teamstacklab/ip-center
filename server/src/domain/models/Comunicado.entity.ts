import { IComunicado } from "domain/interfaces/IComunicado";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('comunicados')
export class Comunicado implements IComunicado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, length: 100 })
  name: string;

  @Column('varchar', { nullable: false, length: 200 })
  description: string;

  @CreateDateColumn()
  createdAt: Date;
}