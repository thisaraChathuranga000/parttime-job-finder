import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Post } from 'src/schemas/Post.schema';
import { CreatePostDto } from '../dto/post/CreatePost.dto';
import { User } from 'src/schemas/User.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<Post>,
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async createPost(createPostDto: CreatePostDto) {
    const newPost = new this.postModel(createPostDto);
    const user = await this.userModel.findById(createPostDto.userId);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    user.postedJobs.push(newPost._id);
    await user.save();
    return newPost.save();
  }

  async findAll() {
    try {
      const posts = await this.postModel
        .find()
        .populate({
          path: 'userId',
          model: this.userModel,
          select: 'name',
        })
        .exec();
      return posts;
    } catch (error) {
      throw new Error('Failed to retrieve Posts');
    }
  }

  async findOnePost(id: string) {
    const post = await this.postModel
      .findById(id)
      .populate({
        path: 'userId',
        model: this.userModel,
        select: 'name',
      })
      .exec();
    if (!post) {
      throw new NotFoundException('Post Not found');
    }
    return post;
  }

  async deletePost(id: string) {
    try {
      const deletedPost = await this.postModel.findByIdAndDelete(id);
      if (!deletedPost) {
        throw new Error('Post Not found');
      }
      return deletedPost;
    } catch (error) {
      throw new Error('Unable to delete Post');
    }
  }

  async applyToPost(
    userId: Types.ObjectId,
    postId: Types.ObjectId,
  ): Promise<{ message: string }> {
    const post = await this.postModel.findById(postId);
    if (!post) {
      throw new NotFoundException('Post not found');
    }

    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Add post to user's appliedJobs if not already present
    if (!user.appliedJobs.includes(postId)) {
      user.appliedJobs.push(postId);
      await user.save();
    }

    // Add user to post's applicants if not already present
    if (!post.applicants.includes(userId)) {
      post.applicants.push(userId);
      await post.save();
    }

    return { message: 'Successfully applied to the post' };
  }

  async getApplicants(postId: string): Promise<any> {
    const post = await this.postModel
      .findById(postId)
      .populate('applicants', '-password');

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return {
      postId: post._id,
      title: post.title,
      applicants: post.applicants,
    };
  }
}
