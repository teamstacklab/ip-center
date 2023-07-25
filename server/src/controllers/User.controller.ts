import { Controller, Param, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'domain/dto/User.dto';
import { UserService } from 'services/User.service';
import { User } from 'domain/entities/User.entity';
import { IsAdminGuard } from 'infra/guards/Roles/is-admin.guard';
import { JwtAccessAuthGuard } from 'infra/guards/Auth/jwt-access.guard';

@Controller('api/users')
export class UserControler {
  constructor(private readonly userService: UserService) {}

  @Get('/find')
  async getAllPartials(): Promise<User[]> {
    const users = await this.userService.getAll();
    const partialUsers = [];

    users.forEach((user) => {
      partialUsers.push(this.userService.partial(user));
    });

    return partialUsers;
  }

  @UseGuards(JwtAccessAuthGuard, IsAdminGuard)
  @Post('/find')
  async getAll(): Promise<User[]> {
    return await this.userService.getAll();
  }

  @Get('/find/:id')
  async getOneByIdPartial(@Param('id') id: string): Promise<Partial<User>> {
    const user = await this.userService.getOneById(+id);
    return this.userService.partial(user);
  }

  @UseGuards(JwtAccessAuthGuard, IsAdminGuard)
  @Post('/find/:id')
  async getOneById(@Param('id') id: string): Promise<Partial<User>> {
    return await this.userService.getOneById(+id);
  }

  // @UseGuards(JwtAccessAuthGuard, IsAdminGuard)
  @Post('/create')
  async create(@Body() userDto: CreateUserDto): Promise<Partial<User>> {
    return await this.userService.create(userDto);
  }

  @UseGuards(JwtAccessAuthGuard, IsAdminGuard)
  @Post('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() userDto: UpdateUserDto,
  ): Promise<Partial<User>> {
    return await this.userService.update(+id, userDto);
  }

  @UseGuards(JwtAccessAuthGuard, IsAdminGuard)
  @Post('/delete/:id')
  async delete(@Param('id') id: string): Promise<Partial<User>> {
    return await this.userService.delete(+id);
  }
}
