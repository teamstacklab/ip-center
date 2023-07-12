import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthRefreshPayloadDto } from "domain/dto/Auth.dto";
import { AuthService } from "services/Auth.service";


@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(
    private env: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: env.get("JWT_REFRESH_SECRET")
    });
  }

  async validate(payload: AuthRefreshPayloadDto): Promise<any> {
    return payload;
  }
}