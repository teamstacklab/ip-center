import { CreateUserDto, UpdateUserDto } from 'domain/dto/User.dto';
import { User } from 'domain/entities/User.entity';
export interface IUser {
    id: number;
    name: string;
    username: string;
    password: string;
    whatsapp: string;
    email: string;
    isAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
    refreshToken: string;
}
export interface IUserService {
    getAll(): Promise<User[]>;
    getOneById(id: number): Promise<User>;
    getOne(filter: Partial<User> | Partial<User>[]): Promise<User>;
    create(userDto: CreateUserDto): Promise<Partial<User>>;
    update(id: number, update: UpdateUserDto): Promise<Partial<User>>;
    delete(id: number): Promise<Partial<User>>;
}
