import { Body, Controller, Request, Get, Post, HttpCode, HttpStatus, UseGuards } from "@nestjs/common";
import { AuthUseCases } from "application/usecases/Auth.usecases";
import { PartialUserDto } from "application/dto/PartialUser.dto";
import { AuthGuard } from "infrastructure/guards/Auth.guard";
import { User } from "domain/models/User.entity";
import { Demand } from "domain/models/Demand.entity";

@Controller('auth')
export class AuthControler {
  constructor(private authUseCases: AuthUseCases) { }

  @Post('/login')
  login(@Body() account: PartialUserDto): any {
    return this.authUseCases.login(account.username, account.password);
  }

  @Post('/register')
  register(@Body() demand: Demand): any {
    return this.authUseCases.register(demand);
  }

  @Get('/profile')
  getProfile(@Request() req: any): any {
    return req.user;
  }
}