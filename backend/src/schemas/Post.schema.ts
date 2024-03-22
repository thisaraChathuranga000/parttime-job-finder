import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class JobPost{
    @Prop({required: true})
    userId: string;

    @Prop({required: true})
    title: string;

    @Prop({required: true})
    decription: string;
}

export const JobPostSchema = SchemaFactory.createForClass(JobPost);