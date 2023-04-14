import { User } from 'domain/models/User.entity'
import { ConflictException, Injectable, UnsupportedMediaTypeException, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'application/dto/User/createUser.dto';
import { UpdateUserDto } from 'application/dto/User/updateUser.dto';
import { EncryptionAdapter } from 'application/adapters/Encryption.adapter';
import { PartialUserDto } from 'application/dto/User/partialUser.dto';


@Injectable()
export class UserUseCases {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly encryption: EncryptionAdapter,
  ) { }

  private readonly logger = new Logger(UserUseCases.name);

  // Seleciona todos os usuários
  async getAllUsers(): Promise<User[]> {
    this.logger.log('Find all users');

    // Verifica o banco e Retorna a lista de objetos
    return await this.userRepository.find();
  }

  // Pega um usuário pelo ID
  async getUserBy(value: PartialUserDto): Promise<User> {
    this.logger.log(`Find an user with an value`);
    return await this.userRepository.findOneBy(value);
  }

  // Seleciona pelo username
  async getByUsername(username: string): Promise<User> {
    this.logger.log(`Find an user with username`);
    const user = await this.userRepository.findOneBy({ username });

    if (!user) {
      throw new NotFoundException(`Usuário ${username} não encontrado."`);
    }

    return user;
  }

  // Pega um usuário pelo ID
  async getUserById(id: number): Promise<User> {
    this.logger.log(`Find an user with id: ${id}`);
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`O usuário de Id: ${id} não foi encontrado.`);
    }

    return user;
  }

  // Cria um novo usuário
  async createUser(userDto: CreateUserDto): Promise<User> {
    this.logger.log(`Save a new user`);

    const { name, username, email, password, isAdmin }: any = userDto;

    if (
      name === null ||
      username === null ||
      email === null ||
      password === null ||
      isAdmin == null
    ) {
      const error = `Informações insuficientes. User = { name, username, email, password, isAdmin }`;
      throw new UnsupportedMediaTypeException(error);
    }

    const userExists = {
      byUsername: await this.userRepository.findOneBy({ username }),
      byEmail: await this.userRepository.findOneBy({ email }),
    };

    if (userExists.byEmail || userExists.byUsername) {
      throw new ConflictException(`Um usuário com mesmo username ou email já existe.`);
    }

    const user = this.userRepository.create({
      // Senha Hash
      password,
      name,
      username,
      email,
      isAdmin,

    });
    await this.userRepository.save(user)

    return user;
  }

  // Atualiza um usuário
  async updateUser(id: number, values: UpdateUserDto): Promise<User> {
    this.logger.log(`Updating an user by id: ${id}`);

    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`O usuário de Id: ${id} não foi encontrado.`);
    }

    const { password, ...partialUser } = values;

    if (password) {
      const newPassword = await this.encryption.hash(password);
      await this.userRepository.update({ id }, { ...partialUser, password: newPassword });
    }

    await this.userRepository.update({ id }, { ...partialUser });

    return await this.userRepository.findOneBy({ id });
  }

  // Deleta um usuário
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
