import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JobPost, JobPostSchema } from 'src/schemas/Post.schema';

@Module({
  imports:[MongooseModule.forFeature([
      {
        name: JobPost.name,
        schema: JobPostSchema,
      }
  ])],
  providers: [PostsService],
  controllers: [PostsController]
})
export class PostsModule {}
