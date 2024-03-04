import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserType{
    @Prop({ required: true })
    isStudent: boolean;

    @Prop({ required: true })
    isOrg: boolean;
}

export const UserTypeSchema = SchemaFactory.createForClass(UserType);