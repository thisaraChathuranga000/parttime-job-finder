import { Body, Controller, Get, Param, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import path from 'path';

@Controller()
export class AppController {

  private uploadedImagePath: string;
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  public async uploadFile(@UploadedFile() file) {
    this.uploadedImagePath = file.path
    return  file;
  }

  @Get('uploads/:imgpath')
  seeUploadedFile(@Param('imgpath') image,
  @Res() res){
    return res.sendFile(image, {root: 'uploads'});
  }
}
