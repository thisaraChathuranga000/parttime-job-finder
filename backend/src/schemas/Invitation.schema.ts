import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Invitation{
    @Prop({required: true})
    senderUserId: string;

    @Prop({required: true})
    reciverUserId: string;

    @Prop({required: true})
    acceptedStatus: boolean;

    @Prop({required: true})
    rejectedStatus: boolean;
}

export const InvitaionSchema = SchemaFactory.createForClass(Invitation);