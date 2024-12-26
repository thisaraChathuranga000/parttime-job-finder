import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Applicant {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ default: false })
  selected: boolean;

  @Prop()
  userImage: string;

  @Prop()
  userName: string;
}

//const ApplicantSchema = SchemaFactory.createForClass(Applicant);

export const ApplicantSchema = SchemaFactory.createForClass(Applicant);

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

  @Prop({ type: [ApplicantSchema] })
  applicants: Applicant[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
