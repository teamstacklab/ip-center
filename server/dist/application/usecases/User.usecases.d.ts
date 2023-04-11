import { User } from 'domain/models/User.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'application/dto/createUser.dto';
import { UpdateUserDto } from 'application/dto/updateUserDto';
export declare class UserUseCases {
    private userRepository;
    constructor(userRepository: Repository<User>);
    private readonly logger;
    getAllUsers(): Promise<User[]>;
    findOne(key: User): Promise<User>;
    getUserById(id: number): Promise<User>;
    createUser(userDto: CreateUserDto): Promise<User>;
    updateUser(id: number, values: UpdateUserDto): Promise<User>;
    deleteUser(id: number): Promise<User>;
}
