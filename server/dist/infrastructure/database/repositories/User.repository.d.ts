import { User } from "domain/models/User.entity";
import { Repository } from "typeorm";
export declare class UserRepository {
    private userRepository;
    constructor(userRepository: Repository<User>);
}
