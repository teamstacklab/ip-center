import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { AuthRefreshPayloadDto } from '../../../domain/dto/Auth.dto';
import { UserService } from '../../../services/User.service';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(private env: ConfigService, private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: env.get('JWT_REFRESH_SECRET'),
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: AuthRefreshPayloadDto): Promise<any> {
    const user = await this.userService.getOneById(payload.sub);
    if (!user) {
      throw new NotFoundException(`Usuário não encontrado!`);
    }
    const [type, refreshToken] = req.headers.authorization?.split(' ') ?? [];
    const result = { ...payload, isAdmin: user.isAdmin };

    return type === 'Bearer'
      ? { ...result, refreshToken }
      : { ...payload, refreshToken: null };
  }
}
