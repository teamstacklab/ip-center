import { Body, Controller, Request, Get, Post, HttpCode, HttpStatus, UseGuards } from "@nestjs/common";
import { AuthUseCases } from "application/usecases/Auth.usecases";
import { PartialUser } from "application/dto/partialUser.dto";
import { AuthGuard } from "infrastructure/guards/Auth.guard";
import { User } from "domain/models/User.entity";

@Controller('auth')
export class AuthControler {
  constructor(private authUseCases: AuthUseCases) { }

  @UseGuards(AuthGuard)
  @Post('/login')
  login(@Body() account: PartialUser): any {
    return this.authUseCases.login(account.username, account.password);
  }

  @UseGuards(AuthGuard)
  @Post('/register')
  register(@Body() user: User): any {
    return this.authUseCases.register(user);
  }

  @UseGuards(AuthGuard)
  @Get('/profile')
  getProfile(@Request() req: any): any {
    return req.user;
  }
}