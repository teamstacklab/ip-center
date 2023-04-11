import { User } from "domain/models/User.entity";
import { UserUseCases } from "./User.usecases";
export declare class AuthUseCases {
    private userUseCases;
    constructor(userUseCases: UserUseCases);
    signIn(username: User, pass: User | string): Promise<any>;
}
