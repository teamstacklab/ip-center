import { IStore } from "domain/interfaces/IStore";
import { User } from "./User.entity";
import { 
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToOne,
  JoinColumn
} from "typeorm";
import { Category } from "./Category.entity";


@Entity('stores')
export class Store implements IStore {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, owner => owner.id, {cascade: true}) @JoinColumn()
  owner: User;
  
  @OneToOne(() => Category, category => category.id, {cascade: true}) @JoinColumn()
  category: Category;

  @Column('varchar', { nullable: false, length: 100 })
  name: string;

  @Column('varchar', { nullable: false, length: 150 })
  slogan: string;

  @Column('text', { nullable: false, array: true })
  images: string[];

  @Column('text', { nullable: false })
  description: string;

  @Column('varchar', { nullable: false, length: 100 })
  instagram: string;

  @Column('varchar', { nullable: false, length: 100 })
  whatsapp: string;

  @Column('varchar', { nullable: false, length: 100 })
  location: string;

  @Column('varchar', { nullable: false, length: 100 })
  services: string;

  @Column('varchar', { nullable: true, length: 100 })
  additionalInfo: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}