import { Controller, Param, Get, Post, Body, Delete, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "application/dto/User/createUser.dto";
import { PartialUserDto } from "application/dto/User/partialUser.dto";
import { UpdateUserDto } from "application/dto/User/updateUser.dto";
import { UserUseCases } from "application/usecases/User.usecases";
import { User } from "domain/models/User.entity";


@Controller('api/users')
export class UserControler {
  constructor(private readonly userUseCases: UserUseCases) { }

  // --> Pega todos os usuários omitindo a senha e outros
  @Get('/')
  async getAllUsers(): Promise<User[]> {
    const users = await this.userUseCases.getAllUsers();
    const partialUsers = [];

    users.forEach(userDto => {
      const {email, password, isAdmin, ...partialUser} = userDto;
      partialUsers.push({...partialUser});
    })

    return partialUsers;
  }

  // --> Pega todos os usuário completamente
  @Post('/')
  async getCompleteAllUsers(): Promise<User[]> {
    return await this.userUseCases.getAllUsers();
  }

  // --> Pega apenas um pelo id omitindo senha
  @Get('/find/:id')
  async getUser(@Param('id') id: string): Promise<PartialUserDto> {
    const user = await this.userUseCases.getUserById(+id);
    const { password, email, isAdmin, ...partialUser } = user;
    return {...partialUser};
  }

  // --> Pega apenas um pelo id completamente
  @Post('/find/:id')
  async getCompleteUser(@Param('id') id: string): Promise<PartialUserDto> {
    return await this.userUseCases.getUserById(+id);;
  }

  // --> Cria um usuário
  @Post('/create')
  async createUser(@Body() userDto: CreateUserDto): Promise<User> {
    return await this.userUseCases.createUser(userDto);
  }

  // --> Atualiza um usuário
  @Post('/update/:id')
  async updateUser(@Param('id') id: string, @Body() params: UpdateUserDto): Promise<User> {
    return await this.userUseCases.updateUser(+id, {...params});
  }
  
  // --> Deleta um usuário
  @Post('/delete/:id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return await this.userUseCases.deleteUser(+id);
  }

}