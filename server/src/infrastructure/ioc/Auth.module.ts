import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "infrastructure/strategies/jwt.strategy";
import { AuthUseCases } from "application/usecases/Auth.usecases";
import { AuthControler } from "presentation/controllers/Auth.controller";
import { AuthenticatedGuard } from "infrastructure/guards/authenticated.guard";
import { EnvModule } from "./Env.module";
import { UserModule } from "./User.module";
import { DemandModule } from "./Demand.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "infrastructure/strategies/local.strategy";
import { SessionSerializer } from "infrastructure/serializers/session.serializer";

const config = new ConfigService();

@Module({
  imports: [
    UserModule,
    DemandModule,
    EnvModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: config.get("JWT_SECRET"),
      signOptions: { expiresIn: config.get("JWT_EXPIRES") }
    })
  ],
  providers: [
    AuthUseCases,
    AuthenticatedGuard,
    JwtStrategy,
    LocalStrategy,
    SessionSerializer
  ],
  controllers: [AuthControler],
  exports: [AuthUseCases]
})

export class AuthModule { }