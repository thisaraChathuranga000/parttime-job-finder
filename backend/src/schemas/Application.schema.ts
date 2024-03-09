import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Application{
    @Prop({required: true})
    postId: string;

    @Prop({required: true})
    userId: string;

}

export const ApplicationSchema = SchemaFactory.createForClass(Application);