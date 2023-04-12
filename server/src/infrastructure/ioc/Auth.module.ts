import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { AuthUseCases } from "application/usecases/Auth.usecases";
import { EnvService } from "infrastructure/environments/EnvService";
import { AuthControler } from "presentation/controllers/Auth.controller";
import { UserModule } from "./User.module";

const config = new ConfigService()

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: ("JWT_SECRET"),
      signOptions: { expiresIn: config.get("JWT_EXPIRES") }
    })
  ],
  providers: [AuthUseCases],
  controllers: [AuthControler],
  exports: [AuthUseCases]
})

export class AuthModule { }