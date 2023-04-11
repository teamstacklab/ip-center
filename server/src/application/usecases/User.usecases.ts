import { User } from 'domain/models/User.entity'
import { ConflictException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { CreateUserDto } from 'application/dto/createUser.dto';
import { UpdateUserDto } from 'application/dto/updateUserDto';


@Injectable()
export class UserUseCases {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) { }

  private readonly logger = new Logger(UserUseCases.name);

  // Obtem todos os usuários
  async getAllUsers(): Promise<User[]> {
    this.logger.log('Find all users');

    // Verifica o banco e Retorna a lista de objetos
    return await this.userRepository.find();
  }

  async getByUsername(username: string): Promise<User> {
    return this.userRepository.findOneBy({ username });
  }

  // Pega um usuário pelo ID
  async getUserById(id: number): Promise<User> {
    this.logger.log(`Find an user with id: ${id}`);
    // Verifica o banco com o ID
    const user = await this.userRepository.findOneBy({ id });
    // Verifica se o usuario realmente existe
    if (!user) {
      throw new NotFoundException(`O usuário de Id: ${id} não foi encontrado.`);
    }
    // se não não existir, retorna-o
    return user;
  }

  // Cria um novo usuário
  async createUser(userDto: CreateUserDto): Promise<User> {
    this.logger.log(`Save a new user`);

    const userExists = await this.userRepository.findOneBy({ username: userDto.username });
    if (userExists) {
      throw new ConflictException(`O usuário de username: ${userDto.username} já existe.`);
    }
    const { password, ...others } = userDto;
    const user = this.userRepository.create({ ...userDto });

    return await this.userRepository.save(user);
  }

  async updateUser(id: number, values: UpdateUserDto): Promise<User> {
    this.logger.log(`Updating an user by id: ${id}`);

    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`O usuário de Id: ${id} não foi encontrado.`);
    }

    await this.userRepository.update({ id }, { ...values });

    return this.userRepository.findOneBy({ id });
  }

  async deleteUser(id: number): Promise<User> {
    this.logger.log(`Deleting an user by id: ${id}`);
    const user = this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`O usuário de Id: ${id} não foi encontrado.`);
    }
    await this.userRepository.delete({ id });

    return user;
  }
}
