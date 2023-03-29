import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from '@/api/user/user.entity';
import * as bcrypt from 'bcryptjs';
import {
  Injectable,
  HttpException,
  HttpStatus,
  UnauthorizedException
} from "@nestjs/common";
import { decode } from "punycode";


@Injectable()
export class AuthHelper {
  @InjectRepository(User)
  private readonly repository: Repository<User>;
  private readonly jwt: JwtService;

  constructor(jwt: JwtService) {
    this.jwt = jwt;
  }

  // Decode do token JWT
  public async decode(token: string): Promise<unknown> {
    return this.jwt.decode(token, null);
  }

  public isPasswordValid(password: string, userPassword: string): boolean {
    return bcrypt.compareSync(password, userPassword);
  }

  // Obtem o usuario pelo id da func. decode()
  public async validateUser(decoded: any): Promise<User> {
    return this.repository.findOne(decoded.id);
  }

  // Gera o token JWT
  public generateToken(user: User): string {
    return this.jwt.sign({ id: user.id, email: user.email })
  }

  // Valida a senha de usuario
  public encodePassword(password: string): string {
    const salt: string = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  // Valida o token JWT, retornando os devidos erros
  private async validate(token: string): Promise<boolean | never> {
    const decoded: unknown = this.jwt.verify(token);

    if (!decoded) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }

    const user: User = await this.validateUser(decoded);

    if (!user) {
      throw new UnauthorizedException();
    }

    return true;
  }
}