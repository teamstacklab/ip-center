import { IDemand } from "domain/interfaces/IDemand";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Demand implements IDemand {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, length: 200 })
    cpf: string;

    @Column({ nullable: false, length: 200})
    loja: string;

    @Column({ nullable: false, length: 200 })
    name: string;

    @Column({ nullable: false, length: 200 })
    username: string;

    @Column({ nullable: false, length: 200 })
    email: string;

    @Column({ nullable: false, length: 200 })
    password: string;

    @CreateDateColumn()
    createdAt: Date;
}