import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
export declare class TypeOrmProvider implements TypeOrmOptionsFactory {
    private env;
    buildDataSourceOptions(): DataSourceOptions;
    createTypeOrmOptions(): TypeOrmModuleOptions;
}
declare const dataSource: DataSource;
export default dataSource;
