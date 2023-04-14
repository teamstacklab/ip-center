import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express'

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest() as Request;

    if (!request.isAuthenticated()) {
      throw new UnauthorizedException("Precisa estar autenticado para acessar!");
    } else {
      return true;
    }

  }
}
