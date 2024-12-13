import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from '../dto/post/CreatePost.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';
import { Types } from 'mongoose';

dotenv.config();

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor('file'))
  createNewPost(@Body() createPostDto: CreatePostDto, @UploadedFile() file) {
    if (file) {
      createPostDto.img =
        process.env.APPLICATION_DOMAIN +
        process.env.APPLICATION_PORT +
        '/posts/img/' +
        file.filename;
    }
    return this.postService.createPost(createPostDto);
  }

  @Get('img/:imgPath')
  seeUploadedFile(@Param('imgPath') image, @Res() res) {
    return res.sendFile(image, { root: 'uploads/posts' });
  }

  @Get('all')
  getAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  async getOnePost(@Param('id') id: string) {
    return this.postService.findOnePost(id);
  }

  @Delete(':id')
  async deletePostById(@Param('id') id: string) {
    return await this.postService.deletePost(id);
  }

  @Post('apply')
  async applyPost(
    @Body() body: { userId: Types.ObjectId; postId: Types.ObjectId },
  ) {
    const { userId, postId } = body;

    if (!userId || !postId) {
      throw new HttpException(
        'userId and postId are required',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.postService.applyToPost(userId, postId);
  }

  @Get(':postId/applicants')
  async getApplicants(@Param('postId') postId: string) {
    return await this.postService.getApplicants(postId);
  }
}
