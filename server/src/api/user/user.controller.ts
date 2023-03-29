import { JwtAuthGuard } from '@/api/user/auth/auth.guard';
import { UserService } from './user.service';
import { UpdateNameDto } from './user.dto'
import { User } from './user.entity';
import { Request } from 'express';
import {
  Body,
  Controller,
  Inject,
  Post,
  ClassSerializerInterceptor,
  UseInterceptors,
  UseGuards,
  Req,
  Put
} from '@nestjs/common';

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Put('name')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  private updateName(@Body() body: UpdateNameDto, @Req() req: Request) {
    return this.service.updateName(body, req);
  }
}
