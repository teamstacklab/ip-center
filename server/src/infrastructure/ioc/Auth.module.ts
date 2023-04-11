import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthUseCases } from "application/usecases/Auth.usecases";
import { getEnv } from "infrastructure/environments";
import { AuthControler } from "presentation/controllers/Auth.controller";
import { UserModule } from "./User.module";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: getEnv("JWT_SECRET"),
      signOptions: { expiresIn: getEnv("JWT_EXPIRES") }
    })
  ],
  providers: [AuthUseCases],
  controllers: [AuthControler]
})

export class AuthModule { }