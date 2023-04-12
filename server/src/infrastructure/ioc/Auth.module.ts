import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { AuthUseCases } from "application/usecases/Auth.usecases";
import { AuthControler } from "presentation/controllers/Auth.controller";
import { AuthGuard } from "infrastructure/guards/Auth.guard";
import { EnvModule } from "./Env.module";
import { UserModule } from "./User.module";
import { DemandUseCases } from "application/usecases/Demand.usecases";
import { DemandModule } from "./Demand.module";

const config = new ConfigService();

@Module({
  imports: [
    UserModule,
    DemandModule,
    EnvModule,
    JwtModule.register({
      global: true,
      secret: config.get("JWT_SECRET"),
      signOptions: { expiresIn: config.get("JWT_EXPIRES") }
    })
  ],
  providers: [
    AuthGuard,
    AuthUseCases
  ],
  controllers: [AuthControler],
  exports: [AuthUseCases]
})

export class AuthModule { }