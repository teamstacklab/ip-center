import { Controller, Param, Get, Post, Body } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto, PartialUserDto } from "domain/dto/User.dto";
import { UserService } from "services/User.service";
import { User } from "domain/entities/User.entity";


@Controller('api/users')
export class UserControler {
  constructor(
    private readonly userService: UserService,
  ) { }

  //Get users omitting fields
  @Get('/find')
  async getAllPartials(): Promise<User[]> {
    const users = await this.userService.getAll();
    const partialUsers = [];

    users.forEach(userDto => {
      const { email, password, isAdmin, ...partialUser } = userDto;
      partialUsers.push({ ...partialUser });
    })

    return partialUsers;
  }

  //Get users completely
  @Post('/find')
  async getAll(): Promise<User[]> {
    return await this.userService.getAll();
  }

  //Get user omitting fields
  @Get('/find/:id')
  async getOneByIdPartial(@Param('id') id: string): Promise<PartialUserDto> {
    const user = await this.userService.getOneById(+id);
    const { password, email, isAdmin, ...partialUser } = user;
    
    return partialUser;
  }

  //Get user completely
  @Post('/find/:id')
  async getOneById(@Param('id') id: string): Promise<PartialUserDto> {
    return await this.userService.getOneById(+id);
  }

  //Create a user
  @Post('/create')
  async create(@Body() userDto: CreateUserDto): Promise<User> {
    return await this.userService.create(userDto);
  }

  //Update a user
  @Post('/update/:id')
  async update(@Param('id') id: string, @Body() userDto: UpdateUserDto): Promise<User> {
    return await this.userService.update(+id, userDto);
  }

  //Delete a user
  @Post('/delete/:id')
  async delete(@Param('id') id: string): Promise<User> {
    return await this.userService.delete(+id);
  }

}