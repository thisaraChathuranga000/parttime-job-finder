import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateUserDto } from '../dto/user/CreateUser.dto';
import { AuthGuard } from 'src/auth/auth.guards';
import { UpdateUserDto } from 'src/dto/user/UpdateUser.dto';
import * as dotenv from 'dotenv';

dotenv.config();

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseInterceptors(FileInterceptor('file'))
  createUser(@Body() createUserDto: CreateUserDto, @UploadedFile() file) {
    if (file) {
      createUserDto.imgUrl =
        process.env.APPLICATION_DOMAIN +
        process.env.APPLICATION_PORT +
        '/users/img/' +
        file.filename;
    }
    return this.usersService.createUser(createUserDto);
  }

  @Get('img/:imgPath')
  seeUploadedFile(@Param('imgPath') image, @Res() res) {
    return res.sendFile(image, { root: 'uploads/users' });
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.findOneUser(id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async updateUserById(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @Get(':userId/postedJobs')
  async getPostedJobs(@Param('userId') userId: string) {
    return await this.usersService.getPostedJobs(userId);
  }

  @UseGuards(AuthGuard)
  @Get(':userId/appliedJobs')
  async getAppliedJobs(@Param('userId') userId: string) {
    return await this.usersService.getAppliedJobs(userId);
  }
}
