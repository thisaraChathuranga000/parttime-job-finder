import { IsNotEmpty } from 'class-validator';

export class SignInDto{
    @IsNotEmpty({message: "email is Required"})
    email: string;

    @IsNotEmpty({message: "Password is Required"})
    password: string;
}