import { Controller, Param, Get, Post, Body, Delete, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "application/dto/User/createUser.dto";
import { PartialUserDto } from "application/dto/User/partialUser.dto";
import { UpdateUserDto } from "application/dto/User/updateUser.dto";
import { UserUseCases } from "application/usecases/User.usecases";
import { User } from "domain/models/User.entity";
import { isAdminGuard } from "infrastructure/guards/isAdmin.guard";

@Controller('users')
export class UserControler {
  constructor(private readonly userUseCases: UserUseCases) { }

  // Pega todos os usuários omitindo a senha e outros
  @Get('/')
  async getAllUsers(): Promise<User[]> {
    const users = await this.userUseCases.getAllUsers();
    const partialUsers = [];
    users.forEach(userDto => {
      const {email, password, isAdmin, ...partialUser} = userDto
      partialUsers.push({...partialUser});
    })
    return partialUsers;
  }

  // Pega todos os usuário completamente
  @UseGuards(isAdminGuard)
  @Post('/')
  async getCompleteAllUsers(): Promise<User[]> {
    return await this.userUseCases.getAllUsers();
  }

  // Pega apenas um pelo id omitindo senha
  @Get('/:id')
  async getUser(@Param('id') id: string): Promise<PartialUserDto> {
    const user = await this.userUseCases.getUserById(parseInt(id))
    const { password, email, isAdmin, ...partialUser } = user
    return {...partialUser};
  }

  // Pega apenas um pelo id completamente
  @UseGuards(isAdminGuard)
  @Post('/:id')
  async getCompleteUser(@Param('id') id: string): Promise<PartialUserDto> {
    const user = await this.userUseCases.getUserById(parseInt(id))
    return user;
  }

  // Cria um usuário
  @UseGuards(isAdminGuard)
  @Post('/create')
  async createUser(@Body() user: CreateUserDto): Promise<User> {
    return await this.userUseCases.createUser(user);
  }

  // Atualiza um usuário
  @Post('/update/:id')
  async updateUser(@Param('id') id: string, @Body() params: UpdateUserDto): Promise<User> {
    return await this.userUseCases.updateUser(parseInt(id), {...params});
  }
  
  // Deleta um usuário
  @Post('/delete/:id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return await this.userUseCases.deleteUser(parseInt(id));
  }

}