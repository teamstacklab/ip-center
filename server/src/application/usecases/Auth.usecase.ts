import { Injectable, UnauthorizedException } from "@nestjs/common";
import { User } from "domain/models/User.entity";
import { UserUseCases } from "./User.usecases";

@Injectable()
export class AuthUseCases {
    constructor(private userUseCases: UserUseCases) {}
    async signIn(username: User, pass: User | string): Promise<any> {
        const user = await this.userUseCases.findOne(username);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const { password, ...result } = user;
        
        return result;
    }
}