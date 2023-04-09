import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmProvider } from "./typeorm/typeorm.provider";

@Module({
    providers: [TypeOrmProvider],
    imports: [
        TypeOrmModule.forRootAsync({ useClass: TypeOrmProvider})
    ],
})

export class DatabaseProvidersModule {}