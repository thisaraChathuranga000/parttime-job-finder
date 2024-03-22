import { Body, Controller, Delete, Get, HttpException, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import mongoose from 'mongoose';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto)
        return this.usersService.createUser(createUserDto)
    }

    @Get()
    getUsers() {
      return this.usersService.getsUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
      const isValid = mongoose.Types.ObjectId.isValid(id);
      if (!isValid) throw new HttpException('User not found', 404);
      const findUser = await this.usersService.getUserById(id);
      if (!findUser) throw new HttpException('User not found', 404);
      return findUser;
    }

    @Put(':id')
    async updateUserById(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUserById(@Param('id') id:string){
      return await this.usersService.deleteUser(id);
    }
}
