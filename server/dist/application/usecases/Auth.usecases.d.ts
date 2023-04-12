import { JwtService } from "@nestjs/jwt";
import { UserUseCases } from "./User.usecases";
export declare class AuthUseCases {
    private jwtService;
    private userUseCases;
    constructor(jwtService: JwtService, userUseCases: UserUseCases);
    signIn(username: string, pass: string): Promise<any>;
}
