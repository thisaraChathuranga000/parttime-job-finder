import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserType } from './UserType.schema';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class User{
    @Prop({unique: true, required: true})
    email: string;

    @Prop({required: true})
    password: string;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    contact: string;

    @Prop({required: true})
    address: string;

    @Prop({required: true})
    imgUrl: string;

    @Prop()
    uni_name: string;

    @Prop()
    res_address: string;

    @Prop()
    gender: string;

    @Prop()
    birthday: string;

    @Prop()
    age: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserType', required: true })
    type: UserType;

}

export const UserSchema = SchemaFactory.createForClass(User);