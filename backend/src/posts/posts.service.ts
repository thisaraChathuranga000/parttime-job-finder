import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobPost } from 'src/schemas/Post.schema';
import { CreatePostDto } from './dto/CreatePost.dto';
import { UpdatePostDto } from './dto/UpdatePost.dto';
import { User } from 'src/schemas/User.schema';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(JobPost.name) 
        private readonly postModel: Model<JobPost>,
        @InjectModel(User.name) 
        private userModel: Model<User>, 
    ) {}

    async createPost(createPostDto: CreatePostDto[]) {
        const newPost = new this.postModel(createPostDto);
        return newPost.save();
    }

    async findAllPosts(id: string) {
        try {
            const posts = await this.postModel
                .find({ userId: id })
                .populate({
                    path: 'userId',
                    model: this.userModel,
                    select: 'name'
                })
                .exec();
            return posts;
        } catch (error) {
            throw new Error('Failed to retrieve Posts');
        }
    }


    async findOnePost(id:string){
        const post = await this.postModel
            .findById(id)
            .populate({
                path: 'userId',
                model: this.userModel, 
                select: 'name'
            })
            .exec();
        if(!post){
            throw new NotFoundException("Post Not found");
        }
        return post;
    }

    async updatePost(id: string, updatePostDto: UpdatePostDto) {
        const post = await this.postModel.findById(id);
        if (!post) {
            throw new NotFoundException('Post not found');
        }
        return this.postModel.findByIdAndUpdate(id, updatePostDto, { new: true });
    }

    async deletePost(id: string){
        try{
            const deletedPost = await this.postModel.findByIdAndDelete(id);
            if(!deletedPost){
                throw new Error("Post Not found")
            }
            return deletedPost;
        } catch (error){
            throw new Error("Unable to delete Post")
        }
    }
}
