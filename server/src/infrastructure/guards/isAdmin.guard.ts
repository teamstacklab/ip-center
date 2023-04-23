import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class isAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest()
    const user = request.user;

    if (!user?.isAdmin) {
      throw new UnauthorizedException("Disponivel apenas para os ADM.");
    }

    return true;
  }
}