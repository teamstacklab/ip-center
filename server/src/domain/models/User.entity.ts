import { IUser } from 'domain/interfaces/IUser';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { nullable: false, length: 200 })
    name: string;

    @Column('varchar', { nullable: false, length: 150 })
    username: string;

    @Column('varchar', { nullable: false, length: 100 })
    password: string;

    @Column('varchar', { nullable: false, length: 200 })
    email: string;

    @Column('boolean', { nullable: false })
    isAdmin: boolean;

}