import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare class TypeOrmProvider implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions>;
}
