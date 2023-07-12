import { Strategy } from "passport-local";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "services/Auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor (private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validate({username, password});
    if (!user) {
      throw new UnauthorizedException(`Usuário ou senha incorretos!`);
    }
    
    return user;
  }
}