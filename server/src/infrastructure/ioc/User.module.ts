import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserUseCases } from "application/usecases/User.usecases";
import { User } from "domain/models/User.entity";
import { UserControler } from "presentation/controllers/User.controller";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserControler],
    providers: [UserUseCases],
    exports: [TypeOrmModule]
})

export class UserModule {}