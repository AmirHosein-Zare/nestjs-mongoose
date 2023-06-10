import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/demo'), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
