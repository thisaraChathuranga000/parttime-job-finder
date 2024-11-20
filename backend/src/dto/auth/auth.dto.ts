import { IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';
import { User } from 'src/schemas/User.schema';

export class AuthDto{
    userDetails:UserDetails;
    access_token:string;
}

export interface UserDetails{
    email: string;
    password: string;
    name: string;
    contact: string;
    address: string;
    imgUrl: string;
    postedJobs: Types.ObjectId[];
    appliedJobs: Types.ObjectId[];
}