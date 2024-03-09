import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Application } from 'src/schemas/Application.schema';
import { CreateApplicationDto } from './dto/CreateApplication.dto';

@Injectable()
export class ApplicationService {
    constructor(
        @InjectModel(Application.name) 
        private readonly applicationModel: Model<Application>
    ) {}

    async createApplication(createApplicationDto: CreateApplicationDto[]) {
        const newApplication = new this.applicationModel(createApplicationDto);
        return newApplication.save();
    }

    async findAllApplicationByPostId(id:string) {
        try{
            const application = await this.applicationModel.find({ postId: id}).exec();
            return application;
        } catch (error) {
            throw new Error('Failt to retriew Posts');
        }
    }

    async findAllApplicationByUserId(id:string) {
        try{
            const application = await this.applicationModel.find({ userId: id}).exec();
            return application;
        } catch (error) {
            throw new Error('Failt to retriew Posts');
        }
    }

    async findOneApplication(id:string){
        const application = await this.applicationModel.findById(id).exec();
        if(!application){
            throw new NotFoundException("Post Not found");
        }
        return application;
    }

    async deletePost(id:string){
        const deletedApplication = await this.applicationModel.findByIdAndDelete(id).exec();
        if(!deletedApplication){
            throw new NotFoundException("Post not found")
        }
        return "Deleted"
    }
}
