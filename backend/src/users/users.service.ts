import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { UserType } from 'src/schemas/UserType.schema';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>, 
        @InjectModel(UserType.name) private userTypeModel: Model<UserType>) 
    {}

    async createUser({ type, ...createUserDto }: CreateUserDto) {
        const newType = new this.userTypeModel(type);
        const savedNewType = await newType.save();
        const newUser = new this.userModel({
            ...createUserDto,
            type: savedNewType
        });
        return newUser.save();
    }

    getsUsers() {
        return this.userModel.find().populate(['type']);
    }

    getUserById(id: string) {
        return this.userModel.findById(id).populate(['type']);
    }
    
}
