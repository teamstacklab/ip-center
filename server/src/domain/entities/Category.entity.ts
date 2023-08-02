import { ICategory } from 'domain/interfaces/ICategory';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class Category implements ICategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, length: 100 })
  name: string;

  @Column('text', { nullable: false, array: true })
  tags: string[];
}
