import { IUserService } from 'domain/interfaces/IUser';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { User } from 'domain/entities/User.entity';
import { CreateUserDto, UpdateUserDto } from 'domain/dto/User.dto';
import { EncryptionService } from './Encription.service';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private encryptionService: EncryptionService,
  ) {}

  private readonly logger = new Logger(UserService.name);

  //Get all users
  async getAll(): Promise<User[]> {
    this.logger.log(`Get all users.`);

    return await this.userRepo.find();
  }

  //Get one user
  async getOne(filter: Partial<User> | Partial<User>[]): Promise<User> {
    this.logger.log(`Get a specific user ${Object.values(filter)}.`);
    const user = this.userRepo.findOne({ where: filter });
    if (!user) {
      throw new NotFoundException(`Usuário ${filter} não encontrado!`);
    }

    return user;
  }

  //Get a user by id
  async getOneById(id: number): Promise<User> {
    this.logger.log(`Get a specific user ${id}.`);
    const user = this.userRepo.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`Usuário ${id} não encontrado!`);
    }

    return user;
  }

  //Create a user
  async create(userDto: CreateUserDto): Promise<User> {
    this.logger.log(`Creates a user`);
    const user = await this.userRepo.findOne({
      where: [{ username: userDto.username }, { email: userDto.email }],
    });
    if (user) {
      throw new ConflictException(`Este usuário já existe!`);
    }
    const { password, ...partialUser } = userDto;
    const hashPassword = await this.encryptionService.hash(password);
    const newUser = this.userRepo.create({
      ...partialUser,
      password: hashPassword,
    });

    return await this.userRepo.save(newUser);
  }

  //Update a user
  async update(id: number, update: UpdateUserDto): Promise<User> {
    this.logger.log(`Get the user of id ${id}.`);

    const user = await this.getOneById(id);
    if (!user) {
      throw new NotFoundException(`Usuário ${id} não encontrado!`);
    }
    if (update.username || update.email) {
      const verification = await this.userRepo.findOne({
        where: [{ username: update.username }, { email: update.email }],
      });
      if (verification) {
        throw new ConflictException(
          `Algum usuário com este email ou username já existe!`,
        );
      }
    }
    const { password, ...partialUser } = update;
    if (password) {
      const hashPassword = await this.encryptionService.hash(password);
      await this.userRepo.update(
        { id },
        { ...partialUser, password: hashPassword },
      );
    } else {
      await this.userRepo.update({ id }, { ...update });
    }

    return await this.getOneById(id);
  }

  //Delete a user
  async delete(id: number): Promise<User> {
    this.logger.log(`Deleting user ${id}.`);
    const user = await this.getOneById(id);
    if (!user) {
      throw new NotFoundException(`Usuário ${id} não encontrado!`);
    }
    await this.userRepo.delete({ id });

    return user;
  }
}
