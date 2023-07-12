import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { Req } from "@nestjs/common";
import { JwtAccessAuthGuard } from "infra/guards/Auth/jwt-access.guard";
import { JwtRefreshAuthGuard } from "infra/guards/Auth/jwt-refresh.guard";
import { LocalAuthGuard } from "infra/guards/Auth/local.guard";
import { AuthService } from "services/Auth.service";

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: any): Promise<any> {
    return await this.authService.login(req.user);
  }

  @UseGuards(JwtAccessAuthGuard)
  @Get('logout')
  async logout(@Req() req: any): Promise<any> {
    await this.authService.logout(req.user['sub'])
    
    return req.user = null;
  }

  @UseGuards(JwtRefreshAuthGuard)
  @Get('refresh')
  async refresh(@Req() req: any): Promise<any> {
    console.log(req.user)
    return await this.authService.refreshTokens(req.user['sub'], req.user['refresh_token']);
  }
  
  @UseGuards(JwtAccessAuthGuard)
  @Get('profile')
  async profile(@Req() req: any): Promise<any> {
    return req.user;
  }
}