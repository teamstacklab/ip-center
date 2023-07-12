import {
  ForbiddenException,
  HttpStatus,
  Injectable,
  Logger,
} from '@nestjs/common';
import { IAuthPayload, IAuthService } from 'domain/interfaces/IAuth';
import { UserService } from './User.service';
import {
  AuthLoginDto,
  AuthAccessPayloadDto,
  AuthRegisterDto,
  AuthValidateDto,
} from 'domain/dto/Auth.dto';
import { JwtService } from '@nestjs/jwt';
import { EncryptionService } from './Encription.service';
import { ConfigService } from '@nestjs/config';
import { DemandService } from './Demand.service';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private userService: UserService,
    private demandService: DemandService,
    private encryption: EncryptionService,
    private jwtService: JwtService,
    private env: ConfigService,
  ) {}

  private readonly logger = new Logger(AuthService.name);

  async login(user: AuthLoginDto): Promise<any> {
    this.logger.log(`Logging in a user.`);
    const payload: IAuthPayload = {
      user: user.username,
      sub: user.id,
    };
    const { accessToken, refreshToken } = await this.getTokens(payload);
    await this.updateRefreshToken(user.id, refreshToken);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async logout(userId: number): Promise<any> {
    this.logger.log(`Logging out a user.`);
    await this.userService.update(userId, {
      refreshToken: null,
    });

    return {
      message: 'logout feito com sucesso!',
      status: HttpStatus.OK,
    };
  }

  async register(credentials: AuthRegisterDto): Promise<any> {
    this.logger.log(`Registering a user.`);
    await this.demandService.create(credentials);

    return {
      message: 'registro feito com sucesso!',
      status: HttpStatus.OK,
    };
  }

  async validate(credentials: AuthValidateDto): Promise<any> {
    this.logger.log(`Validating a user.`);
    const user = await this.userService.getOne({
      username: credentials.username,
    });
    if (user) {
      const passwordsMatch = await this.encryption.compare(
        credentials.password,
        user.password,
      );
      if (passwordsMatch) {
        const userData: AuthLoginDto = { username: user.username, id: user.id };

        return userData;
      }
    }

    return null;
  }

  async updateRefreshToken(userId: number, refreshToken: string): Promise<any> {
    this.logger.log(`Update refresh token.`);
    const hashedToken = await this.encryption.hash(refreshToken);
    await this.userService.update(userId, {
      refreshToken: hashedToken,
    });

    return true;
  }

  async getTokens(payload: AuthAccessPayloadDto): Promise<any> {
    this.logger.log(`Get the auth tokens.`);
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: this.env.get('JWT_ACCESS_SECRET'),
      expiresIn: this.env.get('JWT_ACCESS_EXPIRATION'),
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.env.get('JWT_REFRESH_SECRET'),
      expiresIn: this.env.get('JWT_REFRESH_EXPIRATION'),
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshTokens(userId: number, refreshToken: string): Promise<any> {
    this.logger.log(`Get the refresh tokens.`);
    const user = await this.userService.getOneById(userId);
    if (!user || !user.refreshToken) {
      throw new ForbiddenException(`Acesso negado!`);
    }
    const tokenMatches = await this.encryption.compare(
      refreshToken,
      user.refreshToken,
    );
    if (!tokenMatches) {
      throw new ForbiddenException(`Acesso negado!`);
    }
    const tokens = await this.getTokens({ sub: user.id, user: user.username });
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return {
      access_token: tokens.accessToken,
      refresh_token: tokens.refreshToken,
    };
  }
}
