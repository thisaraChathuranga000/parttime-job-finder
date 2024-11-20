import { forwardRef, Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { CreateUserDto } from '../dto/user/CreateUser.dto';
import { UpdateUserDto } from '../dto/user/UpdateUser.dto';
import { AuthService } from 'src/auth/auth.service';

interface Query{ email:string }

@Injectable()
export class UsersService {
    logger: Logger;
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @Inject(forwardRef(() => AuthService))
        private AuthService: AuthService
    ) { 
        this.logger = new Logger(UsersService.name); 
    }

    // async createUser(createUserDto:CreateUserDto): Promise<User> {
    //     const createdUser = new this.userModel(createUserDto);
    //     return createdUser.save();
    // }

    async createUser(user: CreateUserDto): Promise<CreateUserDto> {
        this.logger.log('Creating user.');
       
        const hashedPassword = await this.AuthService.getHashedPassword(
          user.password
        );
        user.password = hashedPassword;
        const newUser = new this.userModel(user);
        return newUser.save();
    }

    // async findByEmail(email:Query): Promise<User>{
    //     return await this.userModel.find(email).select('+password');
    //     //return await this.userModel.findOne(email);
    // }

    async findOne(email: Query): Promise<CreateUserDto> {
        return await this.userModel.findOne(email).select('+password');
    }
}
