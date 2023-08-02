import { Module } from '@nestjs/common';
import { DatabaseModule } from './ioc/Database.module';
import { UserModule } from './ioc/User.module';
import { DemandModule } from './ioc/Demand.module';
import { StoreModule } from './ioc/Store.module';
import { CategoryModule } from './ioc/Category.module';
import { EventModule } from './ioc/Event.module';
import { ComunicateModule } from './ioc/Comunicate.module';
import { ConfigModule } from '@nestjs/config';
import { EncryptionModule } from './ioc/Encryption.module';
import { AuthModule } from './ioc/Auth.module';
import { ImageModule } from './ioc/Image.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AuthModule,
    DatabaseModule,
    UserModule,
    DemandModule,
    StoreModule,
    CategoryModule,
    EventModule,
    ComunicateModule,
    EncryptionModule,
    ImageModule,
  ],
})
export class AppModule {}
