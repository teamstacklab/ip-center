import { Controller, Param, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'domain/dto/User.dto';
import { UserService } from 'services/User.service';
import { User } from 'domain/entities/User.entity';
import { RolesGuard } from 'infra/guards/Roles/roles.guard';
import { JwtAccessAuthGuard } from 'infra/guards/Auth/jwt-access.guard';

@Controller('api/users')
export class UserControler {
  constructor(private readonly userService: UserService) {}

  @Get('/find')
  async getAllPartials(): Promise<User[]> {
    const users = await this.userService.getAll();
    const partialUsers = [];

    users.forEach((userDto) => {
      const { email, password, isAdmin, refreshToken, ...partialUser } =
        userDto;
      partialUsers.push({ ...partialUser });
    });

    return partialUsers;
  }

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/find')
  async getAll(): Promise<User[]> {
    return await this.userService.getAll();
  }

  @Get('/find/:id')
  async getOneByIdPartial(@Param('id') id: string): Promise<Partial<User>> {
    const user = await this.userService.getOneById(+id);
    const { password, email, isAdmin, refreshToken, ...partialUser } = user;

    return partialUser;
  }

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/find/:id')
  async getOneById(@Param('id') id: string): Promise<Partial<User>> {
    return await this.userService.getOneById(+id);
  }

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/create')
  async create(@Body() userDto: CreateUserDto): Promise<User> {
    return await this.userService.create(userDto);
  }

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() userDto: UpdateUserDto,
  ): Promise<User> {
    return await this.userService.update(+id, userDto);
  }

  @UseGuards(JwtAccessAuthGuard, RolesGuard)
  @Post('/delete/:id')
  async delete(@Param('id') id: string): Promise<User> {
    return await this.userService.delete(+id);
  }
}
