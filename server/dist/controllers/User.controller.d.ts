import { CreateUserDto, UpdateUserDto } from 'domain/dto/User.dto';
import { UserService } from 'services/User.service';
import { User } from 'domain/entities/User.entity';
export declare class UserControler {
    private readonly userService;
    constructor(userService: UserService);
    getAllPartials(): Promise<User[]>;
    getAll(): Promise<User[]>;
    getOneByIdPartial(id: string): Promise<Partial<User>>;
    getOneById(id: string): Promise<Partial<User>>;
    create(userDto: CreateUserDto): Promise<Partial<User>>;
    update(id: string, userDto: UpdateUserDto): Promise<Partial<User>>;
    delete(id: string): Promise<Partial<User>>;
}
