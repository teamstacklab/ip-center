import { Injectable, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthUseCases } from "application/usecases/Auth.usecases";

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor(private authUseCases: AuthUseCases) {
    super();
  }
  async canActivate(context: ExecutionContext) {
    const result = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();

    await super.logIn(request);
    
    return result;
  }
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authUseCases.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException("Não autorizado, usuário não validado!")
    }
    return user;
  }
}