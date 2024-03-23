import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Application } from 'src/schemas/Application.schema';
import { CreateApplicationDto } from './dto/CreateApplication.dto';
import { User } from 'src/schemas/User.schema';

@Injectable()
export class ApplicationService {
    constructor(
        @InjectModel(Application.name) 
        private readonly applicationModel: Model<Application>,
        @InjectModel(User.name) 
        private userModel: Model<User>, 
    ) {}

    async createApplication(createApplicationDto: CreateApplicationDto[]) {
        const newApplication = new this.applicationModel(createApplicationDto);
        return newApplication.save();
    }

    async findAllApplicationByPostId(id:string) {
        try{
            const application = await this.applicationModel
                .find({ postId: id})
                .populate({
                    path: 'userId',
                    model: this.userModel,
                    select: ['name', 'uni_name', 'imgUrl', 'res_address', 'address']
                })
                .exec();
            return application;
        } catch (error) {
            throw new Error('Failed to retriew Applications');
        }
    }

    async findAllApplicationByUserId(id:string) {
        try{
            const application = await this.applicationModel
                .find({ userId: id})
                .populate({
                    path: 'userId',
                    model: this.userModel,
                    select: ['name', 'uni_name', 'imgUrl', 'res_address', 'address']
                })
                .exec();
            return application;
        } catch (error) {
            throw new Error('Failed to retriew Applications');
        }
    }

    async findOneApplication(id:string){
        const application = await this.applicationModel
            .findById(id)
            .populate({
                path: 'userId',
                model: this.userModel,
                select: ['name', 'uni_name', 'imgUrl', 'res_address', 'address']
            })
            .exec();
        if(!application){
            throw new NotFoundException("Application Not found");
        }
        return application;
    }
    
    async deleteApplication(id: string){
        try{
            const deletedApplication = await this.applicationModel.findByIdAndDelete(id);
            if(!deletedApplication){
                throw new Error("Post Not found")
            }
            return deletedApplication;
        } catch (error){
            throw new Error("Unable to delete Application")
        }
    }
}
