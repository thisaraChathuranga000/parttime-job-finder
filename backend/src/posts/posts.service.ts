import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobPost } from 'src/schemas/Post.schema';
import { CreatePostDto } from './dto/CreatePost.dto';

@Injectable()
export class PostsService {

    constructor(
        @InjectModel(JobPost.name) 
        private readonly postModel: Model<JobPost>
    ) {}

    async createPost(createPostDto: CreatePostDto[]) {
        const newPost = new this.postModel(createPostDto);
        return newPost.save();
    }

    async findAllPosts(id:string) {
        try{
            const posts = await this.postModel.find({ userId: id}).exec();
            return posts;
        } catch (error) {
            throw new Error('Failt to retriew Posts');
        }
    }

    async findOnePost(id:string){
        const post = await this.postModel.findById(id).exec();
        if(!post){
            throw new NotFoundException("Post Not found");
        }
        return post;
    }

    async deletePost(id:string){
        const deletedPost = await this.postModel.findByIdAndDelete(id).exec();
        if(!deletedPost){
            throw new NotFoundException("Post not found")
        }
        return "Deleted"
    }

     
}
