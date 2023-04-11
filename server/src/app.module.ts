import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'infrastructure/database/database.module';
import { getEnvFilePath } from 'infrastructure/environments';
import { UserModule } from 'infrastructure/ioc/User.module';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      envFilePath: getEnvFilePath(),
      isGlobal: true,
    }),
    DatabaseModule,
    UserModule
  ],
})

export class AppModule {}
