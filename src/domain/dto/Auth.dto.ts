import { IsNotEmpty } from 'class-validator';
import { CreateDemandDto } from './Demand.dto';
import { IAuthPayload } from 'domain/interfaces/IAuth';

export class AuthValidateDto {
  @IsNotEmpty() username: string;
  @IsNotEmpty() password: string;
}

export class AuthLoginDto {
  @IsNotEmpty() id: number;
  @IsNotEmpty() username: string;
}

export class AuthRegisterDto extends CreateDemandDto {}

export class AuthAccessPayloadDto implements IAuthPayload {
  sub: number;
  user: string;
}

export class AuthRefreshPayloadDto extends AuthAccessPayloadDto {}
