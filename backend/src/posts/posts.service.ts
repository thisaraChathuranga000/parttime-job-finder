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

    if (!user.appliedJobs.includes(postId)) {
      user.appliedJobs.push(postId);
      await user.save();
    }

    const isAlreadyApplicant = post.applicants.some(
      (applicant) => applicant.userId.toString() === userId.toString(),
    );

    if (isAlreadyApplicant) {
      throw new BadRequestException('You have already applied to this post');
    }

    if (!isAlreadyApplicant) {
      post.applicants.push({ userId: userId, selected: false , userImage:user.imgUrl, userName:user.name});
      await post.save();
    }

    return { message: 'Successfully applied to the post' };
  }

  async getApplicants(postId: string): Promise<any> {
    const post = await this.postModel.findById(postId).populate({
      path: 'applicants',
      select: '-password',
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return {
      postId: post._id,
      title: post.title,
      applicants: post.applicants,
    };
  }

  async selectAppliedUser(
    userId: Types.ObjectId,
    postId: Types.ObjectId,
  ): Promise<any> {
    const post = await this.postModel.findById(postId);

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    const applicant = post.applicants.find(
      (applicant) => applicant.userId.toString() === userId.toString(),
    );

    if (!applicant) {
      throw new NotFoundException('Applicant not found for this post');
    }

    applicant.selected = true;
    const selectedApplicant = post.applicants.find((i) => i.userId === userId);
    await post.save();
    return selectedApplicant;
  }

  async removeApplicant(
    userId: string,
    postId: string,
  ): Promise<{ message: string }> {
    const post = await this.postModel.findById(postId);
    if (!post) {
      throw new NotFoundException('Post not found');
    }

    const applicantExists = post.applicants.find(
      (applicant) => applicant.userId.toString() === userId.toString(),
    );
    
    if (!applicantExists) {
      throw new BadRequestException('Applicant not found for this post');
    }

    await this.postModel.updateOne(
      { _id: postId },
      { $pull: { applicants: { userId: userId } } },
    );

    return { message: 'Applicant record deleted successfully' };
  }

 
}
