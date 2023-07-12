import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from "express";
import { AuthRefreshPayloadDto } from "domain/dto/Auth.dto";
import { ModuleRef } from "@nestjs/core";


@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(
    private env: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: env.get("JWT_REFRESH_SECRET"),
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: AuthRefreshPayloadDto): Promise<any> {
    const [type, token] = req.headers.authorization?.split(' ') ?? []

    return type === 'Bearer' ? {...payload, refreshToken: token} : {...payload, refreshToken: null} 
  }
}