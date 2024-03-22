import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { InvitationsService } from './invitations.service';
import { CreateInvitationDto } from './dto/createInvitation.dto';
import { UpdateInvitationDto } from './dto/UpdateInvitation.dto';

@Controller('invitations')
export class InvitationsController {
    constructor(private readonly invitationService:InvitationsService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    createNewPost(@Body() createInvitationDto: CreateInvitationDto[]) {
        return this.invitationService.createInvitaion(createInvitationDto)
    }

    @Get('all/org/:id')
    getAllApplicationsBySenderUserId(@Param('id') id:string){
        return this.invitationService.findAllInvitaionsBySenderUserId(id)
    }

    @Get('all/std/:id')
    getAllApplicationsByReciverUserId(@Param('id') id:string){
        return this.invitationService.findAllInvitaionsByReciverUserId(id)
    }

    @Get(':id')
    async getOneInvitation(@Param('id') id: string){
        return this.invitationService.findOneInvitation(id)
    }

    @Put(':id')
    async updateInvitationById(@Param('id') id: string, @Body() updateInvitationDto: UpdateInvitationDto) {
        return this.invitationService.updateInvitation(id, updateInvitationDto);
    }

    @Delete(':id')
    async deleteUserById(@Param('id') id:string){
      return await this.invitationService.deleteInvitation(id);
    }
}
