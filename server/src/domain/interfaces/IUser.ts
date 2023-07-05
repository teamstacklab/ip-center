import { CreateUserDto, UpdateUserDto, PartialUserDto } from "domain/dto/User.dto";
import { User } from "domain/entities/User.entity";

export interface IUser {
  id: number;
  name: string;
  username: string;
  password: string;
  whatsapp: string;
  email: string;
  isAdmin?: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

export interface IUserService {
  getAll(): Promise<User[]>;
  getOneById(id: number): Promise<User>;
  create(user: CreateUserDto): Promise<User>;
  update(id: number, update: UpdateUserDto): Promise<User>;
  delete(id: number): Promise<User>;
}