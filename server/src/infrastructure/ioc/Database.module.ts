import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "domain/models/User.entity";
import { EnvService} from "infrastructure/environments/EnvService"
import { TypeOrmProvider } from "../database/providers/typeorm/typeorm.provider";
import { EnvModule } from "./Env.module";

@Module({
  providers: [TypeOrmProvider],
  imports: [
    TypeOrmModule.forRootAsync({ 
      useClass: TypeOrmProvider,
      imports: [EnvModule],
      inject: [EnvService],
    }),
    TypeOrmModule.forFeature([User])
  ],
  exports: [TypeOrmProvider]
})

export class DatabaseModule {}