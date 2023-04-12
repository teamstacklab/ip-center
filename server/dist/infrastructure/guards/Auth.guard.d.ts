import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { EnvService } from 'infrastructure/environments/EnvService';
export declare class AuthGuard implements CanActivate {
    private jwtService;
    private envService;
    private reflector;
    constructor(jwtService: JwtService, envService: EnvService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
