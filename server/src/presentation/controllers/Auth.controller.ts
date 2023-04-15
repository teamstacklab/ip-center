import { Body, Controller, Get, Post, UseGuards, Session, Req, InternalServerErrorException } from "@nestjs/common";
import { AuthUseCases } from "application/usecases/Auth.usecases";
import { LocalAuthGuard } from "infrastructure/guards/local.guard";
import { AuthenticatedGuard } from "infrastructure/guards/authenticated.guard";
import { Demand } from "domain/models/Demand.entity";
import { JwtAuthGuard } from "infrastructure/guards/jwt.guard";
import { Request } from "express";
import { CreateDemandDto } from "application/dto/Demand/createDemand.dto";

@Controller('auth')
export class AuthControler {
  constructor(private authUseCases: AuthUseCases) { }

  // Loga um usuário na sessão
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() body: any): Promise<any> {
    return await this.authUseCases.login(body.username, body.password);
  }

  // Desloga o ousuário
  @UseGuards(JwtAuthGuard)
  @Post('/logout')
  async logout(@Req() req: Request): Promise<any>{
    const logoutErr = await new Promise((resolve) => {
      req.logOut({ keepSessionInfo: false }, (err) => {
        resolve(err);
      });
    });
    if (logoutErr) {
      throw new InternalServerErrorException('Não foi possivel sair!')
    }
    return {
      logout: true,
      message: "Você saiu da sessão!",
    }
  }

  // Vê informações da sessão
  @Get('/session')
  async getSession(@Session() sess: Request) {
    return {...sess}
  }

  // Registra um usuário (cria uma demanda)
  @Post('/register')
  async register(@Body() demand: CreateDemandDto): Promise<Demand> {
    return await this.authUseCases.register(demand);
  }

  // Vê o perfil passado na request
  @UseGuards(JwtAuthGuard, AuthenticatedGuard)
  @Get('/profile')
  getProfile(@Req() req: any): any {
    return req.user;
  }
}