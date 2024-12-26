import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema, Applicant, ApplicantSchema } from 'src/schemas/Post.schema';
import { User, UserSchema } from 'src/schemas/User.schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Post.name,
        schema: PostSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Applicant.name,
        schema: ApplicantSchema
      }
    ]),
    MulterModule.register({ dest: './uploads/posts' }),
  ],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
