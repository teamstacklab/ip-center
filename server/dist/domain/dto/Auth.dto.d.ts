import { CreateDemandDto } from './Demand.dto';
import { IAuthPayload } from 'domain/interfaces/IAuth';
export declare class AuthValidateDto {
    username: string;
    password: string;
}
export declare class AuthLoginDto {
    id: number;
    username: string;
}
export declare class AuthRegisterDto extends CreateDemandDto {
}
export declare class AuthAccessPayloadDto implements IAuthPayload {
    sub: number;
    user: string;
}
export declare class AuthRefreshPayloadDto extends AuthAccessPayloadDto {
}
