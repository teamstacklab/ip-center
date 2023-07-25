import { ExecutionContext } from '@nestjs/common';
declare const JwtAccessAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAccessAuthGuard extends JwtAccessAuthGuard_base {
    canActivate(context: ExecutionContext): any;
    handleRequest(err: any, user: any): any;
}
export {};
