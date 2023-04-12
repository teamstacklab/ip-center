import { Module } from '@nestjs/common';
import { DatabaseModule } from 'infrastructure/ioc/Database.module';
import { AuthModule } from 'infrastructure/ioc/Auth.module';
import { UserModule } from 'infrastructure/ioc/User.module';
import { EnvModule } from 'infrastructure/ioc/Env.module';

@Module({
  imports: [
    EnvModule,
    DatabaseModule,
    UserModule,
    AuthModule
  ],
})

export class AppModule {}
