import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreatePostDtp{
    @IsNotEmpty()
    userId: ObjectId;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    decription: string;
}