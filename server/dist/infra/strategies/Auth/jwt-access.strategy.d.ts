import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { AuthAccessPayloadDto } from 'domain/dto/Auth.dto';
import { UserService } from 'services/User.service';
declare const JwtAccessStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAccessStrategy extends JwtAccessStrategy_base {
    private env;
    private userService;
    constructor(env: ConfigService, userService: UserService);
    validate(payload: AuthAccessPayloadDto): Promise<any>;
}
export {};
