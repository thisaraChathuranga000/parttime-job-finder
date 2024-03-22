import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/CreatePost.dto';
import { UpdatePostDto } from './dto/UpdatePost.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService:PostsService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    createNewPost(@Body() createPostDto: CreatePostDto[]) {
        return this.postService.createPost(createPostDto)
    }

    @Get('all/:id')
    getAllPosts(@Param('id') id:string){
        return this.postService.findAllPosts(id)
    }

    @Get(':id')
    async getOnePost(@Param('id') id: string){
        return this.postService.findOnePost(id)
    }

    @Put(':id')
    async updatePostById(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
        return this.postService.updatePost(id, updatePostDto);
    }

    @Delete(':id')
    async deleteUserById(@Param('id') id:string){
      return await this.postService.deletePost(id);
    }

}
