import { SignInDto } from "application/dto/signIn.dto";
import { AuthUseCases } from "application/usecases/Auth.usecases";
export declare class AuthControler {
    private authUseCases;
    constructor(authUseCases: AuthUseCases);
    signIn(account: SignInDto): any;
}
