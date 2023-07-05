import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './app.module';

const config = new ConfigService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  let sess = {
    secret: config.get("SESSION_SECRET"),
    cookie: {
      maxAge: 6000 * 10
    },
    resave: false,
    saveUninitialized: false,
  }

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  
  app.use(session(sess));
  app.use(passport.initialize());
  app.use(passport.session());
  app.enableCors();
  
  await app.listen(5000);
}
bootstrap();
