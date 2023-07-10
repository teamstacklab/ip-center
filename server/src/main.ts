import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './app.module';
<<<<<<< HEAD

const config = new ConfigService();
=======
import helmet from "helmet";
>>>>>>> server

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

<<<<<<< HEAD
  let sess = {
    secret: config.get("SESSION_SECRET"),
    cookie: {
      maxAge: 6000 * 10
    },
    resave: false,
    saveUninitialized: false,
  }

=======
  app.use(helmet());
>>>>>>> server
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  
  app.use(session(sess));
  app.use(passport.initialize());
  app.use(passport.session());
  app.enableCors();

  const PORT = +process.env.PORT;
  
<<<<<<< HEAD
  await app.listen(5000);
=======
  await app.listen(PORT);
>>>>>>> server
}
bootstrap();
