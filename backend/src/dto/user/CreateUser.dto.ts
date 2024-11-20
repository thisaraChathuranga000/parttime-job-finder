import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';
import { passwordPattern } from 'src/constants/const';

export class CreateUserDto {
    @IsNotEmpty({message: "email is Required"})
    @IsEmail({}, { message: 'Invalid email format.'})
    email: string;

    @MinLength(8, { message: 'Password must be at least 8 characters long.'})
    @Matches(passwordPattern, { message: 'Password must include at least one letter, one number, and one special character.'})
    @IsNotEmpty({message: "Password is Required"})
    password: string;

    @IsNotEmpty({message: "Name is Required"})
    @IsString({ message: 'Name must be a string.'})
    name: string;

    @IsNotEmpty({message: "Contact is Required"})
    @IsString({ message: 'Contact must be a string.'})
    contact: string;

    @IsNotEmpty({message: "Address is Required"})
    @IsString({ message: 'Address must be a string.'})
    address: string;
    
    imgUrl: string; 
}