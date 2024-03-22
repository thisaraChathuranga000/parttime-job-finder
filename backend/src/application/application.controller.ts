import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { CreateApplicationDto } from './dto/CreateApplication.dto';

@Controller('application')
export class ApplicationController {
    constructor(private readonly applicationService:ApplicationService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    createNewApplication(@Body() createApplicationDto: CreateApplicationDto[]) {
        return this.applicationService.createApplication(createApplicationDto)
    }

    @Get('all/:id')
    getAllApplicationsByPostId(@Param('id') id:string){
        return this.applicationService.findAllApplicationByPostId(id)
    }

    @Get('all/user/:id')
    getAllApplicationsByUserId(@Param('id') id:string){
        return this.applicationService.findAllApplicationByUserId(id)
    }

    @Get(':id')
    async getOneApplication(@Param('id') id: string){
        return this.applicationService.findOneApplication(id)
    }

    @Delete(':id')
    async deleteApplicationById(@Param('id') id:string){
      return await this.applicationService.deleteApplication(id);
    }
}
