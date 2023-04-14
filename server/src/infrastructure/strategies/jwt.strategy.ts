import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UnsupportedMediaTypeException } from '@nestjs/common';
import { PayloadDto } from 'application/dto/Auth/payload.dto';
import { EnvService } from 'infrastructure/environments/EnvService';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(envService: EnvService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: envService.getVariable("JWT_SECRET"),
    })
  }

  async validate(payload: PayloadDto) {
    const { sub, username, isAdmin } = payload;
    if (!sub || !username || isAdmin == null) {
      throw new UnsupportedMediaTypeException('Há campos não preenchidos!')
    }
    return { sub, username, isAdmin};
  }
}