import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PartialUserDto } from "application/dto/PartialUser.dto";
import { UserUseCases } from "./User.usecases";
import { DemandUseCases } from "./Demand.usecases";
import { CreateDemandDto } from "application/dto/createDemand.dto";
import { EncryptionAdapter } from "application/adapters/Encryption";

@Injectable()
export class AuthUseCases {
  constructor(
    private jwtService: JwtService,
    private userUseCases: UserUseCases,
    private demandUseCases: DemandUseCases,
    private encryption: EncryptionAdapter
  ) { }

  // Faz o login do usuário
  async login(username: string, password: string): Promise<any> {
    const user = await this.validateUser(username, password)
    const payload = { username: user.username, sub: user.id };

    return await this.generateJwtToken(payload);
  }

  // Registra um novo usuário
  async register(demandDto: CreateDemandDto): Promise<any> {
    await this.demandUseCases.createDemand(demandDto);

    const { password, ...partialDemand } = demandDto;

    return partialDemand;

    // const user = await this.userUseCases.createUser(userDto);
    // const payload = { username: user.username, sub:user.id }
    // const token = await this.generateJwtToken(payload);

    // return { user, token }
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userUseCases.getByUsername(username);
    if (user.password === password) {
      const { password, ...partialUserDto } = user;
      return partialUserDto;
    }
    throw new UnauthorizedException('Senha incorreta!');
  }

  // Gera o token JWT
  async generateJwtToken(payload: PartialUserDto): Promise<any> {
    return { acess_token: await this.jwtService.signAsync(payload) };
  }
}