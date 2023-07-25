import { IAuthService } from 'domain/interfaces/IAuth';
import { UserService } from './User.service';
import { AuthLoginDto, AuthAccessPayloadDto, AuthRegisterDto, AuthValidateDto } from 'domain/dto/Auth.dto';
import { JwtService } from '@nestjs/jwt';
import { EncryptionService } from './Encription.service';
import { ConfigService } from '@nestjs/config';
import { DemandService } from './Demand.service';
export declare class AuthService implements IAuthService {
    private userService;
    private demandService;
    private encryption;
    private jwtService;
    private env;
    constructor(userService: UserService, demandService: DemandService, encryption: EncryptionService, jwtService: JwtService, env: ConfigService);
    private readonly logger;
    login(user: AuthLoginDto): Promise<any>;
    logout(userId: number): Promise<any>;
    register(credentials: AuthRegisterDto): Promise<any>;
    validate(credentials: AuthValidateDto): Promise<any>;
    updateRefreshToken(userId: number, refreshToken: string): Promise<any>;
    getTokens(payload: AuthAccessPayloadDto): Promise<any>;
    refreshTokens(userId: number, refreshToken: string): Promise<any>;
}
