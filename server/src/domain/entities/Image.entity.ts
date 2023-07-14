import { IImage, ImagesRole } from "domain/interfaces/IImage";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";


@Entity('images')
export class Image implements IImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: false })
  url: string;

  @ManyToOne(() => User, (owner) => owner.id, { cascade: true })
  @JoinColumn()
  owner!: User;

  @Column()
  role!: ImagesRole;
}