import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthAccessPayloadDto } from '../../../domain/dto/Auth.dto';
import { UserService } from '../../../services/User.service';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private env: ConfigService, private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: env.get('JWT_ACCESS_SECRET'),
    });
  }

  async validate(payload: AuthAccessPayloadDto): Promise<any> {
    const user = await this.userService.getOneById(payload.sub);
    if (!user) {
      throw new NotFoundException(`Usuário não encontrado!`);
    }
    return { ...payload, isAdmin: user.isAdmin };
  }
}
