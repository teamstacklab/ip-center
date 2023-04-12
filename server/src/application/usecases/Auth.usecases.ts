import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PartialUser } from "application/dto/partialUser.dto";
import { User } from "domain/models/User.entity";
import { UserUseCases } from "./User.usecases";

@Injectable()
export class AuthUseCases {
  constructor(
    private jwtService: JwtService,
    private userUseCases: UserUseCases
  ) { }

  // Faz o login do usuário
  async login(username: string, password: string): Promise<any> {
    const user = await this.validateUser(username, password)
    const payload = { username: user.username, sub: user.id };

    return await this.generateJwtToken(payload);
  }

  // Registra um novo usuário
  async register(userDto: User): Promise<any> {
    const user = await this.userUseCases.createUser(userDto);
    const payload = { username: user.username, sub:user.id }
    const token = await this.generateJwtToken(payload);

    return { user, token }
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userUseCases.getByUsername(username);
    if (user.password === password) {
      const { password, ...partialUser } = user;
      return partialUser;
    }
    throw new UnauthorizedException('Senha incorreta!');
  }

  // Gera o token JWT
  async generateJwtToken(payload: PartialUser): Promise<any> {
    return { acess_token: await this.jwtService.signAsync(payload) };
  }
}