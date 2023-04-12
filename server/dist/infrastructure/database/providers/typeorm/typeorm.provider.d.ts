import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvService } from 'infrastructure/environments/EnvService';
export declare class TypeOrmProvider implements TypeOrmOptionsFactory {
    private readonly envService;
    constructor(envService: EnvService);
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions>;
}
