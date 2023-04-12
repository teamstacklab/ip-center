import { Module } from '@nestjs/common';
import { DatabaseModule } from 'infrastructure/ioc/Database.module';
import { AuthModule } from 'infrastructure/ioc/Auth.module';
import { UserModule } from 'infrastructure/ioc/User.module';
import { EnvModule } from 'infrastructure/ioc/Env.module';
import { DemandModule } from 'infrastructure/ioc/Demand.module';

@Module({
  imports: [
    EnvModule,
    DatabaseModule,
    UserModule,
    DemandModule,
    AuthModule,
  ],
})

export class AppModule {}
