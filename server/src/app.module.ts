import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseProvidersModule } from 'infrastructure/database/providers/dbproviders.module';
import { getEnvFilePath } from 'infrastructure/environments';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: getEnvFilePath(), isGlobal: true }),
    DatabaseProvidersModule,
  ],
})

export class AppModule {}
