import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/User.schema';
import { UserType, UserTypeSchema } from 'src/schemas/UserType.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
    imports:[MongooseModule.forFeature([
        {
            name: User.name,
            schema: UserSchema,
        },
        {
            name: UserType.name,
            schema: UserTypeSchema,
        },
    ])],
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule {}