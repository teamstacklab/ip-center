import { Body, Controller, Request, Get, Post, UseGuards, Session, Req } from "@nestjs/common";
import { AuthUseCases } from "application/usecases/Auth.usecases";
import { PartialUserDto } from "application/dto/User/partialUser.dto";
import { LocalAuthGuard } from "infrastructure/guards/local.guard";
import { AuthenticatedGuard } from "infrastructure/guards/authenticated.guard";
import { Demand } from "domain/models/Demand.entity";
import { JwtAuthGuard } from "infrastructure/guards/jwt.guard";

@Controller('auth')
export class AuthControler {
  constructor(private authUseCases: AuthUseCases) { }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() body: any): Promise<any> {
    return await this.authUseCases.login(body.username, body.password);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/logout')
  async logout(@Req() req: any): Promise<any>{
    await this.authUseCases.logout(req.user);
    return {
      message: "Você saiu da sessão!",
    }
  }

  @Get('/session')
  async getSession(@Session() sess: Record<string, any>) {
    return {...sess}
  }

  @Post('/register')
  async register(@Body() demand: Demand): Promise<any> {
    return await this.authUseCases.register(demand);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/profile')
  getProfile(@Request() req: any): any{
    return req.user;
  }
}