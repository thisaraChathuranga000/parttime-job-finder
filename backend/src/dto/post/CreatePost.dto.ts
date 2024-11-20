import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreatePostDto {
  @IsNotEmpty({ message: 'User ID is required.' })
  userId: ObjectId;

  @IsNotEmpty({ message: 'Title is required.' })
  title: string;

  @IsNotEmpty({ message: 'Description is required.' })
  description: string;

  img: string;

  @IsNotEmpty({ message: 'Location is required.' })
  location: string;

  @IsNotEmpty({ message: 'Starting time is required.' })
  startingTime: string;

  @IsNotEmpty({ message: 'Payment is required.' })
  payment: string;
}
