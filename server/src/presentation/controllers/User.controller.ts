import { Controller, Param, Get, Post, Body, Delete } from "@nestjs/common";
import { CreateUserDto } from "application/dto/createUser.dto";
import { UpdateUserDto } from "application/dto/updateUserDto";
import { UserUseCases } from "application/usecases/User.usecases";
import { User } from "domain/models/User.entity";

@Controller('users')
export class UserControler {
  constructor(private readonly userUseCases: UserUseCases) { }

  @Get('/')
  async getAllUsers(): Promise<User[]> {
    return await this.userUseCases.getAllUsers();
  }

  @Get('/:id')
  async getUser(@Param('id') id: string): Promise<User> {
    return await this.userUseCases.getUserById(parseInt(id));
  }

  @Post('/create')
  async createUser(@Body() user: CreateUserDto): Promise<User> {
    return await this.userUseCases.createUser(user);
  }

  @Post('/update/:id')
  async updateUser(@Param('id') id: string, @Body() params: UpdateUserDto): Promise<User> {
    return await this.userUseCases.updateUser(parseInt(id), {...params});
  }

  @Delete('/delete/:id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return await this.userUseCases.deleteUser(parseInt(id));
  }

}