import { IUserService } from "domain/interfaces/IUser";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConflictException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { User } from "domain/entities/User.entity";
import { CreateUserDto, PartialUserDto, UpdateUserDto } from "domain/dto/User.dto";


@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
  ) { }

  private readonly logger = new Logger(UserService.name);

  //Get all users
  async getAll(): Promise<User[]> {
    this.logger.log(`Get all users.`)
  
    return await this.userRepo.find();
  }

  //Get one user
  async getOne(filter: PartialUserDto | PartialUserDto[]): Promise<User> {
    this.logger.log(`Get a specific user ${filter}.`);
    const user = this.userRepo.findOne({where:filter});
    if (!user) {
      throw new NotFoundException(`Usuário ${filter} não encontrado!`);
    }

    return user;
  }

  //Get a user by id
  async getOneById(id: number): Promise<User> {
    this.logger.log(`Get a specific user ${id}.`);
    const user = this.userRepo.findOneBy({id});
    if (!user) {
      throw new NotFoundException(`Usuário ${id} não encontrado!`);
    }

    return user;
  }

  //Create a user
  async create(userDto: CreateUserDto): Promise<User> {
    this.logger.log(`Creating a user: ${userDto}`);

    const user = await this.userRepo.findOne({
      where: [{username: userDto.username}, {email: userDto.email}]
    });

    if (user) {
      throw new ConflictException(`Este usuário já existe!`);
    }

    const newUser = this.userRepo.create(userDto);

    return await this.userRepo.save(newUser);
  }

  //Update a user
  async update(id: number, update: UpdateUserDto): Promise<User> {
    this.logger.log(`Get the user of id ${id}.`);

    const user = await this.getOneById(id);
    if (!user) {
      throw new NotFoundException(`Usuário ${id} não encontrado!`)
    }

    await this.userRepo.update({id}, {...update});
    return await this.getOneById(id);
  }
  
  //Delete a user
  async delete(id: number): Promise<User> {
    this.logger.log(`Deleting user ${id}.`);

    const user = await this.getOneById(id);
    if (!user) {
      throw new NotFoundException(`Usuário ${id} não encontrado!`)
    }

    await this.userRepo.delete({id});

    return user;
  }
}