import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const { user } = context.switchToHttp().getRequest();
    if (!user?.isAdmin) {
      throw new UnauthorizedException(`Você não tem acesso a este recurso!`);
    }

    return true;
  }
}
