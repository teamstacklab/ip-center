import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { Request } from 'express';
import { AuthRefreshPayloadDto } from 'domain/dto/Auth.dto';
import { UserService } from 'services/User.service';
declare const JwtRefreshStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshStrategy extends JwtRefreshStrategy_base {
    private env;
    private userService;
    constructor(env: ConfigService, userService: UserService);
    validate(req: Request, payload: AuthRefreshPayloadDto): Promise<any>;
}
export {};
