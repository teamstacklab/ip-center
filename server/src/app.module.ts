import { Module } from '@nestjs/common';
<<<<<<< HEAD
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
=======
import { DatabaseModule } from 'ioc/Database.module';
import { UserModule } from 'ioc/User.module';
import { DemandModule } from 'ioc/Demand.module';
import { StoreModule } from 'ioc/Store.module'
import { CategoryModule } from 'ioc/Category.module';
import { EventModule } from 'ioc/Event.module';
import { ComunicateModule } from 'ioc/Comunicate.module';
import { ConfigModule } from '@nestjs/config';
import { EncryptionModule } from 'ioc/Encryption.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
>>>>>>> server
    DatabaseModule,
    UserModule,
    DemandModule,
    AuthModule,
    LojaModule,
    CategoryModule,
    EventModule,
<<<<<<< HEAD
    ComunicadoModule
=======
    ComunicateModule,
    EncryptionModule
>>>>>>> server
  ],
})

export class AppModule {}
