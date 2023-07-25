import { IUserService } from 'domain/interfaces/IUser';
import { Repository } from 'typeorm';
import { User } from 'domain/entities/User.entity';
import { CreateUserDto, UpdateUserDto } from 'domain/dto/User.dto';
import { EncryptionService } from './Encription.service';
export declare class UserService implements IUserService {
    private userRepo;
    private encryptionService;
    constructor(userRepo: Repository<User>, encryptionService: EncryptionService);
    private readonly logger;
    getAll(): Promise<User[]>;
    getOne(filter: Partial<User> | Partial<User>[]): Promise<User>;
    getOneById(id: number): Promise<User>;
    create(userDto: CreateUserDto): Promise<Partial<User>>;
    update(id: number, update: UpdateUserDto): Promise<Partial<User>>;
    delete(id: number): Promise<Partial<User>>;
    partial(user: User): Partial<User>;
}
