import { Body, Controller, Delete, Get, Param, Post, Put, Res, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/CreatePost.dto';
import { UpdatePostDto } from './dto/UpdatePost.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService:PostsService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    @UseInterceptors(FileInterceptor('file'))
    createNewPost(@Body() createPostDto: CreatePostDto, @UploadedFile() file) {
        if (file) {createPostDto.img = file.filename}
        return this.postService.createPost(createPostDto)
    }

    @Get('all')
    getAll(){
        return this.postService.findAll()
    }

    @Get('all/:id')
    getAllPosts(@Param('id') id:string){
        return this.postService.findAllPosts(id)
    }

    @Get('uploads/:imgpath')
    seeUploadedFile(@Param('imgpath') image, @Res() res){
      return res.sendFile(image, {root: 'uploads/posts'});
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
