import { ICategory } from "domain/interfaces/ICategory";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category implements ICategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, length: 100 })
  name: string;

  @Column('varchar', { nullable: false, length: 300 })
  tags: string;
}
