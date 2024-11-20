import { Controller, Post, Request, Logger, UseGuards, HttpCode, Body, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/dto/user/CreateUser.dto';
//import { User } from 'src/schemas/User.schema';
import { SignInDto } from 'src/dto/auth/signIn.dto';
import { AuthDto } from 'src/dto/auth/auth.dto';

export interface UserData{
    user:User;
    access_token:string;
}

export interface User{
    _id?:string;
    email:string;
}

@Controller('auth')
export class AuthController {
    logger: Logger;
    constructor(private readonly authService: AuthService) {
        this.logger = new Logger(AuthController.name);
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req): Promise<CreateUserDto> {
        try {
            return req.user;
        } catch (error) {
            throw error;
        }
    }
}