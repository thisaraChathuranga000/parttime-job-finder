import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { InvitationsService } from './invitations.service';
import { CreateInvitationDto } from './dto/createInvitation.dto';

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
}
