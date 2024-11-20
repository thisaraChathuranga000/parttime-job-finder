import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import mongoose from 'mongoose';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateUserDto } from '../dto/user/CreateUser.dto';
import { UpdateUserDto } from '../dto/user/UpdateUser.dto';
import * as dotenv from 'dotenv';

dotenv.config();

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor('file'))
  createUser(@Body() createUserDto: CreateUserDto, @UploadedFile() file){
    if (file) {createUserDto.imgUrl =  process.env.APPLICATION_DOMAIN + "users/" + file.filename}
    return this.usersService.createUser(createUserDto);
  }

  @Get(':imgPath')
    seeUploadedFile(@Param('imgPath') image, @Res() res){
      return res.sendFile(image, {root: 'uploads/users'});
  }

}
