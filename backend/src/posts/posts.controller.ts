import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/CreatePost.dto';

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

}
