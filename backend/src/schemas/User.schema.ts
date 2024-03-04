import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserType } from './UserType.schema';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class User{
    @Prop({unique: true, required: true})
    userName: string;

    @Prop({required: true})
    password: string;

    @Prop({required: true})
    imgUrl: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserType', required: true })
    type: UserType;
}

export const UserSchema = SchemaFactory.createForClass(User);