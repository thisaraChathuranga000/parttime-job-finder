import { CreateUserDto } from '../user/CreateUser.dto';

export class AuthDto{
    userDetails:CreateUserDto;
    access_token:string;
}