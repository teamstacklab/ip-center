import {
  AuthLoginDto,
  AuthRegisterDto,
  AuthValidateDto,
} from 'domain/dto/Auth.dto';

export interface IAuthPayload {
  sub: number;
  user: string;
}

export interface IAuthService {
  login(credentials: AuthLoginDto): Promise<any>;
  logout(userId: number): Promise<any>;
  register(credentials: AuthRegisterDto): Promise<any>;
  validate(credentials: AuthValidateDto): Promise<any>;
}
