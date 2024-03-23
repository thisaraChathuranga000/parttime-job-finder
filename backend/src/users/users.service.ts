import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { UserType } from 'src/schemas/UserType.schema';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';

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

    async updateUser(id: string, updateUserDto: UpdateUserDto) {
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        if (updateUserDto.type) {
            const newType = new this.userTypeModel(updateUserDto.type);
            const savedNewType = await newType.save();
            updateUserDto.type = savedNewType;
        }
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).populate(['type']);
    }

    async deleteUser(id: string){
        try{
            const deletedUser = await this.userModel.findByIdAndDelete(id);
            if(!deletedUser){
                throw new Error("User Not found")
            }
            return deletedUser;
        } catch (error){
            throw new Error("Unable to delete User")
        }
    }
}
