import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreatePostDto{
    @IsNotEmpty()
    userId: ObjectId;
    
    @IsNotEmpty()
    category: string;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    img: string;
    location: string;
    start_data: string;
    end_data: string;
    start_time: string;
    end_time: string;
    payment: string;
    city: string;
}