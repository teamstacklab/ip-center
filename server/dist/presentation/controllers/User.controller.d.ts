import { CreateUserDto } from "application/dto/createUser.dto";
import { UpdateUserDto } from "application/dto/updateUserDto";
import { UserUseCases } from "application/usecases/User.usecases";
import { User } from "domain/models/User.entity";
export declare class UserControler {
    private readonly userUseCases;
    constructor(userUseCases: UserUseCases);
    getAllUsers(): Promise<User[]>;
    getUser(id: string): Promise<User>;
    createUser(user: CreateUserDto): Promise<User>;
    updateUser(id: string, params: UpdateUserDto): Promise<User>;
    deleteUser(id: string): Promise<User>;
}
