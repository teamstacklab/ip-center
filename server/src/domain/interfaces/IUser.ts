<<<<<<< HEAD
=======
import { CreateUserDto, UpdateUserDto } from "domain/dto/User.dto";
import { User } from "domain/entities/User.entity";

>>>>>>> server
export interface IUser {

  id: number;
  name: string;
  username: string;
  password: string;
  whatsapp: string;
  email: string;
  isAdmin: boolean; // <-- Verifica as permissões
  createdAt: Date;
<<<<<<< HEAD
  updatedAt: Date;
  
=======
  updatedAt?: Date;
}

export interface IUserService {
  getAll(): Promise<User[]>;
  getOneById(id: number): Promise<User>;
  getOne(filter: Partial<User> | Partial<User>[]): Promise<User>;
  create(userDto: CreateUserDto): Promise<User>;
  update(id: number, update: UpdateUserDto): Promise<User>;
  delete(id: number): Promise<User>;
>>>>>>> server
}