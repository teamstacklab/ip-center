import { Request } from 'express';
import { AuthService } from 'services/Auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: Request): Promise<any>;
    logout(req: Request): Promise<any>;
    refresh(req: Request): Promise<any>;
    profile(req: Request): Promise<any>;
}
