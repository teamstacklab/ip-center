import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { getEnvFilePath } from "infrastructure/environments";
import { EnvService } from "infrastructure/environments/EnvService";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnvFilePath(),
      isGlobal: true,
    })
  ],
  providers: [EnvService],
  exports: [EnvService]
})

export class EnvModule { }