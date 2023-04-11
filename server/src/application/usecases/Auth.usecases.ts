import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserUseCases } from "./User.usecases";

@Injectable()
export class AuthUseCases {
  constructor(
    private userUseCases: UserUseCases,
    private jwtService: JwtService
  ) { }
  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userUseCases.getByUsername(username);

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, sub: user.id };
    return {
      acess_token: await this.jwtService.signAsync(payload)
    };
  }
}