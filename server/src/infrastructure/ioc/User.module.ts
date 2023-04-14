import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EncryptionAdapter } from "application/adapters/Encryption.adapter";
import { UserUseCases } from "application/usecases/User.usecases";
import { User } from "domain/models/User.entity";
import { UserControler } from "presentation/controllers/User.controller";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserControler],
  providers: [EncryptionAdapter, UserUseCases, Object],
  exports: [
    TypeOrmModule,
    EncryptionAdapter,
    UserUseCases,
  ]
})

export class UserModule { }