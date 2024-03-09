import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateApplicationDto{
    @IsNotEmpty()
    PostId: ObjectId;

    @IsNotEmpty()
    userId: ObjectId;
}