import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JobPost, JobPostSchema } from 'src/schemas/Post.schema';
import { User, UserSchema } from 'src/schemas/User.schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports:[MongooseModule.forFeature([
      {
        name: JobPost.name,
        schema: JobPostSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      }
  ]),
  MulterModule.register({dest: './uploads/posts',})],
  providers: [PostsService],
  controllers: [PostsController]
})
export class PostsModule {}
