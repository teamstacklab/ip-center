import { Module } from "@nestjs/common";
import { UserModule } from "./User.module";
import { AuthService } from "services/Auth.service";
import { LocalStrategy } from "infra/strategies/Auth/local.strategy";
import { AuthController } from "controllers/Auth.controller";
import { EncryptionModule } from "./Encryption.module";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule } from "@nestjs/config";
import { JwtAccessStrategy } from "infra/strategies/Auth/jwt-access.strategy";
import { DemandModule } from "./Demand.module";
import { JwtRefreshStrategy } from "infra/strategies/Auth/jwt-refresh.strategy";

@Module({
  imports: [
    UserModule,
    ConfigModule,
    DemandModule,
    EncryptionModule,
    JwtModule.register({})
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtAccessStrategy,
    JwtRefreshStrategy
  ],
  controllers: [
    AuthController
  ],
})

export class AuthModule { }