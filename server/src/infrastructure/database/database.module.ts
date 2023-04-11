import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "domain/models/User.entity";
import { TypeOrmProvider } from "./providers/typeorm/typeorm.provider";

@Module({
  providers: [TypeOrmProvider],
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeOrmProvider }),
    TypeOrmModule.forFeature([User])
  ],
})

export class DatabaseModule {}