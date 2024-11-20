import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  contact: string;

  @Prop({ required: true })
  address: string;

  @Prop()
  imgUrl: string;

  @Prop({ type: [Types.ObjectId], ref: 'Post' })
  postedJobs: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'Post' })
  appliedJobs: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
