import { User } from 'domain/models/User.entity'
import { ConflictException, Injectable, UnsupportedMediaTypeException, Logger, NotFoundException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from "typeorm";
import { CreateUserDto } from 'application/dto/User/createUser.dto';
import { UpdateUserDto } from 'application/dto/User/updateUser.dto';
import { EncryptionAdapter } from 'application/adapters/Encryption.adapter';
import { PartialUserDto } from 'application/dto/User/partialUser.dto';


@Injectable()
export class UserUseCases {
  constructor(
    @InjectRepository(User) private userRepository: MongoRepository<User>,
    private readonly encryption: EncryptionAdapter,
  ) { }

  private readonly logger = new Logger(UserUseCases.name);


  async findOneBy(values: PartialUserDto): Promise<User> {
    return await this.userRepository.findOne({where: values})
  }
  
  // --> Seleciona todos os usuários
  async getAllUsers(): Promise<User[]> {
    this.logger.log('Find all users');

    return await this.userRepository.find();
  }


  // --> Pega um usuário pelo ID
  async getUserById(id: number): Promise<User> {
    this.logger.log(`Find an user with id: ${id}`);
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`O usuário de Id: ${id} não foi encontrado.`);
    }

    return user;
  }


  // --> Pega um por um valor
  async getUserBy(values: PartialUserDto): Promise<User> {
    this.logger.log(`Find an user with an value`);

    const user = await this.userRepository.findOne({ where: values });

    if (!user) {
      throw new NotFoundException(`Usuário de valores {${values}} não encontrado.`)
    }

    return user;
  }


  // --> Cria um novo usuário
  async createUser(userDto: CreateUserDto): Promise<User> {
    this.logger.log(`Creates a new user`);

    const hasUsername = await this.userRepository.findOneBy({ username: userDto.username })
    const hasEmail = await this.userRepository.findOneBy({ email: userDto.email });
  
    if (hasUsername) {
      throw new ConflictException(`Usuário de username: ${userDto.username} já existe!`)
    } else if (hasEmail) {
      throw new ConflictException(`Usuário de email: ${userDto.email} já existe!`);
    }

    const { password, ...partialUser } = userDto;
    const hashPass = await this.encryption.hash(password);
    const user = this.userRepository.create({...partialUser, password: hashPass });

    return await this.userRepository.save(user);
  }


  // --> Atualiza um usuário
  async updateUser(id: number, values: UpdateUserDto): Promise<User> {
    this.logger.log(`Updating an user by id: ${id}`);

    await this.getUserById(id);

    const { password, ...partialUser } = values;

    if (Object.values(values).length == 0) {
      throw new InternalServerErrorException("Ao menos um dos valores precisa ser preenchido: { name, username, email, password, isAdmin, whatsapp }.");
    } else {
      if (password) {
        const newPassword = await this.encryption.hash(password);
        await this.userRepository.update({ id }, { ...partialUser, password: newPassword });
      } else {
        await this.userRepository.update({ id }, { ...partialUser });
      }
    }
    
    return await this.getUserById(id);
  }


  // --> Deleta um usuário
  async deleteUser(id: number): Promise<User> {
    this.logger.log(`Deleting the user with id: ${id}`);

    const user = await this.getUserById(id);
    await this.userRepository.delete({ id });

    return user;
  }
}
