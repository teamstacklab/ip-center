import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthUseCases } from "application/usecases/Auth.usecases";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authUseCases: AuthUseCases) { 
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authUseCases.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}