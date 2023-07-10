import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "services/User.service";
import { User } from "domain/entities/User.entity";
import { UserControler } from "controllers/User.controller";
import { EncryptionModule } from "./Encryption.module";


@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    EncryptionModule
  ],
  controllers: [UserControler],
  providers: [UserService, Object],
  exports: [
    TypeOrmModule,
    UserService,
  ]
})

export class UserModule { }