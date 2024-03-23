import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class JobPost{
    @Prop({required: true})
    userId: string;

    @Prop({required: true})
    title: string;

    @Prop()
    description: string;

    @Prop()
    img: string;

    @Prop()
    location: string;

    @Prop()
    start_data: string;

    @Prop()
    end_data: string;

    @Prop()
    start_time: string;

    @Prop()
    end_time: string;

    @Prop()
    payment: string;

    @Prop()
    city: string;
}

export const JobPostSchema = SchemaFactory.createForClass(JobPost);