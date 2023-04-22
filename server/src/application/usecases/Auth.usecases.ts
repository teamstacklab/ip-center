import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PartialUserDto } from "application/dto/User/partialUser.dto";
import { UserUseCases } from "./User.usecases";
import { DemandUseCases } from "./Demand.usecases";
import { CreateDemandDto } from "application/dto/Demand/createDemand.dto";
import { EncryptionAdapter } from "application/adapters/Encryption.adapter";
import { PayloadDto } from "application/dto/Auth/payload.dto";

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

    const payload: PayloadDto = {
      username: user.username,
      isAdmin: user.isAdmin,
      sub: user.id,
    };

    const token = await this.generateJwtToken(payload);

    return {
      user: user,
      ...token
    }
  }

  // Registra um novo usuário
  async register(demandDto: CreateDemandDto): Promise<any> {
    await this.demandUseCases.createDemand(demandDto);

    const { password, ...partialDemand } = demandDto;

    return partialDemand;
  }
  
  // Valida um usuário
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userUseCases.getUserBy({ username });
    
    if (await this.encryption.compare(password, user.password)) {
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