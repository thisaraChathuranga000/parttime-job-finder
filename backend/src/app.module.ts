import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import * as dotenv from 'dotenv';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from './auth/auth.module';
dotenv.config();

@Module({
  imports: [UsersModule, MongooseModule.forRoot(process.env.MONGO_URL), PostsModule,AuthModule, MulterModule.register({dest: './uploads',})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
