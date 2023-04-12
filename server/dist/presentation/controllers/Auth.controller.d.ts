import { AuthUseCases } from "application/usecases/Auth.usecases";
import { PartialUser } from "application/dto/partialUser.dto";
import { User } from "domain/models/User.entity";
export declare class AuthControler {
    private authUseCases;
    constructor(authUseCases: AuthUseCases);
    login(account: PartialUser): any;
    register(user: User): any;
    getProfile(req: any): any;
}
