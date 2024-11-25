import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { CreateUserDto } from '../dto/user/CreateUser.dto';
import { AuthService } from 'src/auth/auth.service';
import { UpdateUserDto } from 'src/dto/user/UpdateUser.dto';
const bcrypt = require('bcrypt');

interface Query {
  email: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @Inject(forwardRef(() => AuthService))
    private AuthService: AuthService,
  ) {}

  async createUser(user: CreateUserDto): Promise<CreateUserDto> {
    const hashedPassword = await this.getHashedPassword(user.password);
    user.password = hashedPassword;
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findOne(email: Query): Promise<CreateUserDto> {
    return await this.userModel.findOne(email).select('-password');
  }

  async getHashedPassword(password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err: any, hash: any) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  }

  async findOneUser(id: string) {
    const user = await this.userModel.findById(id).select('-password');
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  async getPostedJobs(userId: string): Promise<any> {
    const user = await this.userModel.findById(userId).populate('postedJobs');

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      postedJobs: user.postedJobs,
    };
  }

  async getAppliedJobs(userId: string): Promise<any> {
    const user = await this.userModel.findById(userId).populate('appliedJobs');

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      appliedJobs: user.appliedJobs,
    };
  }
}
