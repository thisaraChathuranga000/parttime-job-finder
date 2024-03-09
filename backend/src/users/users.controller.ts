import { Body, Controller, Get, HttpException, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import mongoose from 'mongoose';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService:UsersService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto)
        return this.UsersService.createUser(createUserDto)
    }

    @Get()
    getUsers() {
      return this.UsersService.getsUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
      const isValid = mongoose.Types.ObjectId.isValid(id);
      if (!isValid) throw new HttpException('User not found', 404);
      const findUser = await this.UsersService.getUserById(id);
      if (!findUser) throw new HttpException('User not found', 404);
      return findUser;
    }
}
