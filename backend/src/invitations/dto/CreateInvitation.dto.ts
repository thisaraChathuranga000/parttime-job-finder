import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateInvitationDto{
    @IsNotEmpty()
    senderUserId: ObjectId;

    @IsNotEmpty()
    reciverUserId: ObjectId;

    @IsNotEmpty()
    acceptedStatus: boolean;

    @IsNotEmpty()
    rejectedStatus: boolean;
}