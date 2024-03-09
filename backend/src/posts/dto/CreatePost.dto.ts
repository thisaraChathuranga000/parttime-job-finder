import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreatePostDto{
    @IsNotEmpty()
    userId: ObjectId;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    decription: string;
}