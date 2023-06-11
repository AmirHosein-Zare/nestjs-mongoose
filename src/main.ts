import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
const session = require('express-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();
