import { Module } from '@nestjs/common';
import { DatabaseModule } from 'infrastructure/ioc/Database.module';
import { AuthModule } from 'infrastructure/ioc/Auth.module';
import { UserModule } from 'infrastructure/ioc/User.module';
import { EnvModule } from 'infrastructure/ioc/Env.module';
import { DemandModule } from 'infrastructure/ioc/Demand.module';
import { LojaModule } from 'infrastructure/ioc/Loja.module'
import { CategoryModule } from 'infrastructure/ioc/Category.module';
import { EventModule } from 'infrastructure/ioc/Event.module';
import { ComunicadoModule } from 'infrastructure/ioc/Comunicado.module';

@Module({
  imports: [
    EnvModule,
    DatabaseModule,
    UserModule,
    DemandModule,
    AuthModule,
    LojaModule,
    CategoryModule,
    EventModule,
    ComunicadoModule
  ],
})

export class AppModule {}
