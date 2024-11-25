import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Post extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  img: string;

  @Prop()
  location: string;

  @Prop()
  startingTime: string;

  @Prop()
  payment: string;

  @Prop({ type: [Types.ObjectId], ref: 'User' })
  applicants: Types.ObjectId[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
