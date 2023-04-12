import { JwtService } from "@nestjs/jwt";
import { PartialUser } from "application/dto/partialUser.dto";
import { User } from "domain/models/User.entity";
import { UserUseCases } from "./User.usecases";
export declare class AuthUseCases {
    private jwtService;
    private userUseCases;
    constructor(jwtService: JwtService, userUseCases: UserUseCases);
    login(username: string, password: string): Promise<any>;
    register(userDto: User): Promise<any>;
    validateUser(username: string, password: string): Promise<any>;
    generateJwtToken(payload: PartialUser): Promise<any>;
}
