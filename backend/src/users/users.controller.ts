import { Body, Controller, Delete, Get, HttpException, Param, Post, Put, Res, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import mongoose from 'mongoose';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService) {}

    @Post('student')
    @UsePipes(new ValidationPipe())
    @UseInterceptors(FileInterceptor('file'))
    createStudentUser(@Body() createUserDto: CreateUserDto, @UploadedFile() file) {
        console.log(createUserDto)
        if (file) {
          createUserDto.imgUrl = file.filename;
        }
        createUserDto.type = {isStudent:true, isOrg:false}
        return this.usersService.createUser(createUserDto)
    }

    @Post('org')
    @UsePipes(new ValidationPipe())
    @UseInterceptors(FileInterceptor('file'))
    createOrgUser(@Body() createUserDto: CreateUserDto, @UploadedFile() file) {
        console.log(createUserDto)
        if (file) {
          createUserDto.imgUrl = file.filename;
        }
        createUserDto.type = {isStudent:false, isOrg:true}
        return this.usersService.createUser(createUserDto)
    }

    @Get()
    getUsers() {
      return this.usersService.getsUsers();
    }

    @Get('uploads/:imgpath')
    seeUploadedFile(@Param('imgpath') image, @Res() res){
      return res.sendFile(image, {root: 'uploads/users'});
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
