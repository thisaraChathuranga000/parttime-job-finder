import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { ApplicationModule } from './application/application.module';
import { InvitationsModule } from './invitations/invitations.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [UsersModule, MongooseModule.forRoot(process.env.MONGO_URL), PostsModule, ApplicationModule, InvitationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
