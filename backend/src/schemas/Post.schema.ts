import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Post{
    @Prop()
    userId: string;

    @Prop({required: true})
    title: string;

    @Prop({required: true})
    decription: string;
}